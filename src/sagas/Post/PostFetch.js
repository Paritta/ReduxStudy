import { put, call, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetFirebase(action) {
    // 페이지네이션 로직
    let PageNum = action.payload;
    let PageSize = 6;
    let RefData = {};
    let PgData = {};

    // 첫 번째 페이지
    if(action.payload === 1) {
        PgData = yield getFirebase()
            .database()
            .ref("posts/")
            .limitToFirst(PageSize)
            .once("value")
            .then(res => {
                return res.val();
            });

        for(let key in PgData) {
            const ImageKey = Object.values(PgData[key]["PostImageKey"]);

            if(ImageKey[0] !== undefined) {
                const Image = yield getFirebase()
                    .database()
                    .ref(`Images/${ImageKey[0]}`)
                    .once("value")
                    .then(res => {
                        return res.val();
                    });

                PgData[key]["Image"] = Image;
            } else {
                PgData[key]["Image"] = "";
            }
        }
    } else {
        // 레퍼런스 데이터를 이용해서 페이지네이션 시작 엔드 포인트 키를 얻음
        RefData = yield getFirebase()
            .database()
            .ref("posts")
            .orderByKey()
            .once("value")
            .then((res) => {
                return res.val();
            });

        const EndNum = (PageNum - 1) * PageSize;
        const EndPoint = Object.keys(RefData)[EndNum];
        const LastNum = Object.keys(RefData).length % PageSize;

        PgData = yield getFirebase()
            .database()
            .ref("posts")
            .endAt(EndPoint)
            .limitToLast(LastNum)
            .once("value")
            .then((res) => {
                return res.val();
            });

        // 데이터에 이미지 삽입
        for(let key in PgData) {
            const ImageKey = Object.values(PgData[key]["PostImageKey"]);

            if(ImageKey[0] !== undefined) {
                const Image = yield getFirebase()
                    .database()
                    .ref(`Images/${ImageKey[0]}`)
                    .once("value")
                    .then(res => {
                        return res.val();
                    });

                PgData[key]["Image"] = Image;
            } else {
                PgData[key]["Image"] = "";
            }
        }
    }
    return PgData;
}

export function* fetchData (action) {
    try {
        const data = yield call(GetFirebase, action);
        const TransformFetch = [];

        for (let key in data) {
            const TransformFetchData = {
                postId: key,
                data: data[key]
            };

            TransformFetch.push(TransformFetchData);
        }

        yield put({ type: "fetch/fetch_Success", payload: TransformFetch });
    } catch (error) {
        console.log(error);
        yield put({ type: "fetch/fetch_Failure", payload: error })
    }
}

export function* watchFetchData () {
    yield takeEvery("fetch/fetch_Request", fetchData);
}

