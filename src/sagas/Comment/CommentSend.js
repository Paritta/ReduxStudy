import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* GetFireBase(action) {
    // comment 추가
    const data = yield getFirebase()
        .push("comment", action.payload);

    // 해당 포스트에 comment id push
    yield getFirebase()
        .push("posts/"+action.payload.postId+"/comments", data.key);
}

export function* CommentSend (action) {
    try {
        yield call(GetFireBase, action);
        yield put({ type: "comment/comment_send_Success" });
    } catch (error) {
        console.log(error);
        yield put({ type: "comment/comment_send_Failure", payload: error })
    }
}

export function* watchCommentSend () {
    yield takeEvery("comment/comment_send_Request", CommentSend);
}


