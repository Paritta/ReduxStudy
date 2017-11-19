import { all } from "redux-saga/effects";
import { watchFetchData } from "./FetchSaga";
import { watchCommentSend } from "./CommentSendSaga";

export default function* rootSaga () {
    yield all([watchCommentSend(), watchFetchData()])
}

