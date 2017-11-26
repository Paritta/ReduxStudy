import React from "react";
import { watchPostDelete, PostDelete, MakePostDelete } from "./PostDeleteSaga";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle PostDelete", () => {
    it("it sholud delete request", () => {
        const WatchGen = watchPostDelete();
        expect(WatchGen.next().value).toEqual(
            takeEvery("post/post_delete_Request", PostDelete)
        );
    });

    it("it should dispatch Post_delete ...", () => {
        const action = undefined;

        const PostDeleteGen = PostDelete();
        expect(PostDeleteGen.next().value).toEqual(
            call(MakePostDelete, action)
        );

        expect(PostDeleteGen.next().value).toEqual(
            put({ type: "post/post_delete_Success" })
        );

        expect(PostDeleteGen.next().value).toEqual(
            put({ type: "Modal/hide_Modal" })
        );

        expect(PostDeleteGen.next().value).toEqual(
            put({ type: "fetch/fetch_Request" })
        );
    });
});

