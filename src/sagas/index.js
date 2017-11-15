import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* fetchData () {
    try {
        const data = yield getFirebase().ref();
        console.log(data);
        yield put({ type: "fetch/fetch_Success" });
    } catch (error) {
        yield put({ type: "fetch/fetch_Failure", payload: error })
    }
};

function* watchFetchData () {
    yield takeEvery("fetch/fetch_Request", fetchData);
}

export default function* rootSaga () {
    yield watchFetchData()
}

