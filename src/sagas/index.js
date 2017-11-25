import { all } from "redux-saga/effects";
import { watchFetchData } from "./FetchSaga";
import { watchCommentSend } from "./CommentSendSaga";
import { watchCommentReceive } from "./CommentReceiveSaga";
import { watchPostDelete } from "./PostDeleteSaga";
import { watchImageSend } from "./ImageSendSaga";

export default function* rootSaga () {
    yield all([
        watchCommentSend(),
        watchFetchData(),
        watchCommentReceive(),
        watchPostDelete(),
        watchImageSend(),
    ])
}

