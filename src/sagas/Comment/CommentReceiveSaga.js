import { put, takeEvery, call } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

export function* MakeCommentArray (action) {
    const Comment = yield getFirebase()
        .database()
        .ref("comment")
        .once("value")
        .then(res => {
            return res.val();
        });

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
        const CommentEle = Comment[CommentsList[i]];
        CommentEle["CommentId"] = CommentsList[i];
        // 에러. CommentsList[i]가 undefined

        CommentArray.push(CommentEle);
    }

    return CommentArray
}

export function* CommentReceive (action) {
    try {
        const CommentArray = yield call(MakeCommentArray, action);

        yield put({ type: "comment/comment_receive_Success", payload:  CommentArray});
    } catch (error) {
        yield put({ type: "comment/comment_receive_Failure", payload: error })
    }
}

export function* watchCommentReceive () {
    yield takeEvery("comment/comment_receive_Request", CommentReceive)
}

