import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentSend (action) {
    try {
        const data = yield getFirebase()
            .push("comment", action.payload);

        console.log(data.key);
        console.log(action.payload);

        yield getFirebase()
            .push("posts/"+action.payload.postId+"/comments", data.key);

        yield put({ type: "comment/comment_send_Success" });
    } catch (error) {
        yield put({ type: "comment/comment_send_Failure", payload: error })
    }
}

export function* watchCommentSend () {
    console.log("1");
    yield takeEvery("comment/comment_send_Request", CommentSend);
}


