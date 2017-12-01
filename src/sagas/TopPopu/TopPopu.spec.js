import React from "react";
import { watchTopPopuReceive, TopPopuRequest, MakeRequest } from "./TopPopu";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle TopPopu", () => {
    it("it sholud TopPopu request", () => {
        const WatchGen = watchTopPopuReceive();
        expect(WatchGen.next().value).toEqual(
            takeEvery("toppopu/toppopu_receive_Request", TopPopuRequest)
        );
    });

    it("it should dispatch receive ...", () => {
        const action = undefined;

        const TopPopuRequeGen = TopPopuRequest();
        expect(TopPopuRequeGen.next().value).toEqual(
            call(MakeRequest, action)
        );
    });
});
