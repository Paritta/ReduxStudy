import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentMakeArray (action) {
    try {
        const data = yield getFirebase()
            .database()
            .ref("posts")
            .once("value")
            .then(res => {
                return res.val();
            });

        yield put({ type: "comment/comment_make_array_Success" });
    } catch (error) {
        yield put({ type: "comment/comment_make_array_Failure", payload: error })
    }
}

export function* watchCommentMakeArray () {
    yield takeEvery("comment/comment_make_array_Request", CommentMakeArray);
}

