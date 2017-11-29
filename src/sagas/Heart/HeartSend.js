import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* HeartPush(action) {
    // Heart (email) 추가
    // 데이터 정규화 x
    // const PostId = action.payload.postid;
    // cont Email = action.payload.Email;

    // yield getFirebase()
    //     .push(`posts/${PostId}/HeartUser`, Email);
}

export function* HeartSend (action) {
    try {
        yield call(HeartPush, action);
        yield put({ type: "heart/heart_send_Success" });
    } catch (error) {
        yield put({ type: "heart/heart_send_Failure", payload: error })
    }
}

export function* watchHeartSend () {
    yield takeEvery("heart/heart_send_Request", HeartSend);
}

