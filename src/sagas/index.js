import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* fetchData () {
    try {
        const data = yield getFirebase().ref();
        console.log(data);
        yield put({ type: "FETCH_SUCCESS" });
    } catch (error) {
        yield put({ type: "FETCH_FAILUERE", payload: error })
    }
};

function* watchFetchData () {
    yield takeEvery("FETCH_REQUEST", fetchData);
}

export default function* rootSaga () {
    yield watchFetchData()
}

