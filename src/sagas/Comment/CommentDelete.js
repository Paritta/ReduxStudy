import { put, call, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* MakeCommentDelete(action) {
    const CommentId = action.payload.CommentId;
    const PostId = action.payload.PostId;

    // 댓글 Id에 해당되는 댓글을 지운다.
    yield getFirebase()
        .database()
        .ref(`comment/${CommentId}`)
        .remove();

    // Post에 달린 댓글 참조를 찾기 위해 요청
    const RefComments = yield getFirebase()
        .database()
        .ref(`posts/${PostId}/comments`)
        .once("value")
        .then(res => {
            return res.val();
        });

    // Post에 달린 댓글 참조 삭제
    for(let key in RefComments) {
        if(CommentId === RefComments[key]) {
            yield getFirebase()
                .database()
                .ref(`posts/${PostId}/comments/${key}`)
                .remove()
        }
    }
}

export function* CommentDelete (action) {
    try {
        yield call(MakeCommentDelete, action);
        yield put({ type: "comment/comment_delete_Success" });
        yield put({ type: "comment/comment_receive_Request" });
    } catch (error) {
        yield put({ type: "comment/comment_delete_Failure", payload: error })
    }
}

export function* watchCommentDelete () {
    yield takeEvery("comment/comment_delete_Request", CommentDelete)
}
