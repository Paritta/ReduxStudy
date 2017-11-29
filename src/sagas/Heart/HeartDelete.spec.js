import React from "react";
import { watchHeartDelete, HeartDelete, HeartRemove } from "./HeartDelete";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle HeartDelete", () => {
    it("it should delete request", () => {
        const WatchGen = watchHeartDelete();
        expect(WatchGen.next().value).toEqual(
            takeEvery("heart/heart_delete_Request", HeartDelete)
        );
    });

    const action = undefined;
    it("it should call HeartRemove and image_send_Success", () => {
        const HeartDeleteGen = HeartDelete();
        expect(HeartDeleteGen.next().value).toEqual(
            call(HeartRemove, action)
        );

        expect(HeartDeleteGen.next().value).toEqual(
            put({ type: "heart/heart_delete_Success" })
        );
    });
});
