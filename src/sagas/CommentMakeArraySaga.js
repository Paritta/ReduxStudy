// 포스트 댓글을 배열로 만든다.

import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* CommentMakeArray (action) {
    try {
        const CommentsObject = yield getFirebase()
            .database()
            .ref("posts/"+action.payload)
            .once("value")
            .then(res => {
                return res.val();
            });

        const CommentsList = [];

        for(let key in CommentsObject.comments) {
            CommentsList.push(key);
        }

        yield put({ type: "comment/comment_make_array_Success", payload: CommentsList});
    } catch (error) {
        yield put({ type: "comment/comment_make_array_Failure", payload: error })
    }
}

export function* watchCommentMakeArray () {
    yield takeEvery("comment/comment_make_array_Request", CommentMakeArray);
}

