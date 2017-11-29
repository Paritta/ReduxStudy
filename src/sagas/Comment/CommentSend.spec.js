import React from "react";
import { watchCommentSend, CommentSend, GetFireBase, PushFireBase } from "./CommentSend";
import { takeEvery, call, put } from "redux-saga/effects";

it("handle CommentSend", () => {
    const gen = watchCommentSend();
    expect(gen.next().value).toEqual(
        takeEvery("comment/comment_send_Request", CommentSend)
    );

    const action = undefined;

    const commentSendgen = CommentSend();
    expect(commentSendgen.next().value).toEqual(
        call(GetFireBase, action)
    );

    expect(commentSendgen.next().value).toEqual(
         put({ type: "comment/comment_send_Success" })
    );
});

