import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentReceive (action) {
    try {
        const Comment = yield getFirebase()
            .database()
            .ref("comment")
            .once("value")
            .then(res => {
                return res.val();
            });

        yield put({ type: "comment/comment_receive_Success", payload:  Comment});
    } catch (error) {
        yield put({ type: "comment/comment_receive_Failure", payload: error })
    }
}

export function* watchCommentReceive () {
    yield takeEvery("comment/comment_receive_Request", CommentReceive);
}

