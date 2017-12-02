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

    it("it should call HeartSend and heart_send_Success", () => {
        const action = {
            payload: {
                PostId: {},
                Email: {}
            }
        };
        const HeartPushGen = HeartPush(action);
        expect(HeartPushGen.next().value).toEqual(
            call(HeartPush, action)
        );

        expect(HeartPushGen.next().value).toEqual(
            put({ type: "heart/heart_send_Success" })
        );
    });
    //
});
