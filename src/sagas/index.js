import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* fetchData () {
    try {
        const data = getFirebase()
            .database()
            .ref("posts")
            .limitToLast(10)
            .once("value")
            .then(res =>
                console.log(res.val())
            );
        yield put({ type: "fetch/fetch_Success" });
    } catch (error) {
        yield put({ type: "fetch/fetch_Failure", payload: error })
    }
};

export function* watchFetchData () {
    yield takeEvery("fetch/fetch_Request", fetchData);
}

export default function* rootSaga () {
    yield watchFetchData()
}

