import React from "react";
import { watchHeartSend, HeartSend, HeartPush } from "./HeartSend";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle HeartSend", () => {
    it("it should send request", () => {
        const WatchGen = watchHeartSend();
        expect(WatchGen.next().value).toEqual(
            takeEvery("heart/heart_send_Request", HeartSend)
        );
    });

    const action = undefined;
    it("it should call HeartSend and heart_send_Success", () => {
        const HeartSendGen = HeartSend();
        expect(HeartPushGen.next().value).toEqual(
            call(HeartSend, action)
        );

        expect(HeartSendGen.next().value).toEqual(
            put({ type: "heart/heart_send_Success" })
        );
    });
    //
});
