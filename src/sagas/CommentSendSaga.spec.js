import React from "react";
import { watchCommentSend, CommentSend, GetFireBase, PushFireBase } from "./CommentSendSaga";
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

    const data = call(GetFireBase, action);

    const arg = [action, action];

    const pushGen = PushFireBase();
    expect(pushGen.next().value).toEqual(
        // call(PushFireBase, ...arg)
    );

    // const CommentSendGen = CommentSend();
    // expect(CommentSendGen.next().value).toEqual(
    //      put({ type: "comment/comment_send_Success" })
    // );
});

