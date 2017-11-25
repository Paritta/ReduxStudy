import { put, call, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetFirebase(action) {
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
        yield put({ type: "fetch/fetch_Failure", payload: error })
    }
}

export function* watchFetchData () {
    yield takeEvery("fetch/fetch_Request", fetchData);
}

