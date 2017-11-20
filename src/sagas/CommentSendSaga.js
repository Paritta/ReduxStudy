import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentSend (action) {
    try {
        // comment 추가
        const data = yield getFirebase()
            .push("comment", action.payload);

        // 해당 포스트에 comment id push
        yield getFirebase()
            .push("posts/"+action.payload.postId+"/comments", data.key);

        yield put({ type: "comment/comment_send_Success" });
    } catch (error) {
        console.log(error);
        yield put({ type: "comment/comment_send_Failure", payload: error })
    }
}

export function* watchCommentSend () {
    yield takeEvery("comment/comment_send_Request", CommentSend);
}


