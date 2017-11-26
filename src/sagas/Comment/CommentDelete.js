import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentDelete (action) {
    try {
        yield getFirebase()
            .database()
            .ref("comment/"+action.payload)
            .remove();

        yield put({ type: "comment/comment_delete_Success" });
        yield put({ type: "comment/comment_receive_Request" });
    } catch (error) {
        yield put({ type: "comment/comment_delete_Failure", payload: error })
    }
}

export function* watchCommentDelete () {
    yield takeEvery("comment/comment_delete_Request", CommentDelete)
}
