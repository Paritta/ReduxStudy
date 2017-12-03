import React from "react";
import { watchCommentDelete, CommentDelete, MakeCommentDelete } from "./CommentDelete";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle CommentDelete", () => {
    it("it sholud delete request", () => {
        const WatchGen = watchCommentDelete();
        expect(WatchGen.next().value).toEqual(
            takeEvery("comment/comment_delete_Request", CommentDelete)
        );
    });

    it("it should dispatch comment_delete ...", () => {
        const action = undefined;

        const CommentDeleteGen = CommentDelete();
        expect(CommentDeleteGen.next().value).toEqual(
            call(MakeCommentDelete, action)
        );

        expect(CommentDeleteGen.next().value).toEqual(
            put({ type: "comment/comment_delete_Success" })
        );

        expect(CommentDeleteGen.next().value).toEqual(
            put({ type: "comment/comment_receive_Request" })
        );
    });
});


