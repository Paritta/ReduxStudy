import { all } from "redux-saga/effects";
import { watchFetchData } from "./FetchSaga";
import { watchCommentSend } from "./CommentSendSaga";
import { watchCommentReceive } from "./CommentReceiveSaga";
import { watchCommentMakeArray } from "./CommentMakeArraySaga";

export default function* rootSaga () {
    yield all([
        watchCommentSend(),
        watchFetchData(),
        watchCommentReceive(),
        watchCommentMakeArray(),
    ])
}

