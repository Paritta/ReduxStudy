import { all } from "redux-saga/effects";
import { watchFetchData } from "./Post/PostFetchSaga";
import { watchCommentSend } from "./Comment/CommentSendSaga";
import { watchCommentReceive } from "./Comment/CommentReceiveSaga";
import { watchCommentDelete } from "./Comment/CommentDelete";
import { watchPostDelete } from "./Post/PostDeleteSaga";
import { watchImageSend } from "./Image/ImageSendSaga";
import { watchImageReceive } from "./Image/ImageReceiveSaga";

export default function* rootSaga () {
    yield all([
        watchCommentSend(),
        watchFetchData(),
        watchCommentReceive(),
        watchCommentDelete(),
        watchPostDelete(),
        watchImageSend(),
        watchImageReceive(),
    ])
}

