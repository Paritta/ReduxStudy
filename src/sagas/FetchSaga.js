import { put, call, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetFirebase() {
    const get = yield getFirebase()
        .database()
        .ref("posts/")
        .limitToLast(10)
        .once("value")
        .then(res => {
            console.log(res.val());
            return res.val();
        });

    return get;
}

export function* fetchData (action) {
    try {
        const data = yield call(GetFirebase);

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

