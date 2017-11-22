import { put, takeEvery, all } from "redux-saga/effects/";
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

        yield put({ type: "comment/comment_make_array_Success"});
        const CommentsObject = yield getFirebase()
            .database()
            .ref("posts/"+action.payload)
            .once("value")
            .then(res => {
                return res.val();
            });

        const CommentsList = [];

        for(let key in CommentsObject.comments) {
            CommentsList.push(CommentsObject.comments[key]);
        }

        const CommentArray = [];

        for(let i = 0; i < CommentsList.length; i++) {
            CommentArray.push(Comment[CommentsList[i]]);
        }

        yield put({ type: "comment/comment_receive_Success", payload:  CommentArray});
    } catch (error) {
        yield put({ type: "comment/comment_receive_Failure", payload: error })
    }
}

export function* watchCommentReceive () {
    yield all([
        takeEvery("comment/comment_receive_Request", CommentReceive)
    ])
}

