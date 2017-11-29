import React from "react";
import { watchCommentReceive, CommentReceive, MakeCommentArray } from "./CommentReceive";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle CommentSend", () => {
    it("it sholud receive request", () => {
        const WatchGen = watchCommentReceive();
        expect(WatchGen.next().value).toEqual(
            takeEvery("comment/comment_receive_Request", CommentReceive)
        );
    });

    it("it should dispatch comment_receive ...", () => {
        const action = undefined;

        const CommentReceiveGen = CommentReceive();
        expect(CommentReceiveGen.next().value).toEqual(
            call(MakeCommentArray, action)
        );

        const payload = undefined;
        expect(CommentReceiveGen.next().value).toEqual(
            put({ type: "comment/comment_receive_Success", payload })
        );
    });
});



