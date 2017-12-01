import { put, call, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* MakeRequest(action) {
    PgData = yield getFirebase()
        .database()
        .ref("posts/")
        .once("value")
        .then(res => {
            return res.val();
        });

    return PgData;
}

export function* TopPopuRequest (action) {
    try {
        const PgData = yield call(MakeRequest, action);
        yield put({ type: "toppopu/toppopu_receive_Success", payload: PgData });
    } catch (error) {
        yield put({ type: "toppopu/toppopu_receive_Failure", payload: error })
    }
}

export function* watchTopPopuReceive () {
    yield takeEvery("toppopu/toppopu_receive_Request", TopPopuRequest)
}
