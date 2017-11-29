import React from "react";
import { watchImageReceive, ImageReceive, GetPostImageKey } from "./ImageReceive";
import { takeEvery, fork } from "redux-saga/effects";

describe("handle ImageReceive", () => {
    it("it should send request", () => {
        const WatchGen = watchImageReceive();
        expect(WatchGen.next().value).toEqual(
            takeEvery("image/image_receive_Request", ImageReceive)
        );
    });

    const action = undefined;
    it("it should call ImageReceive", () => {
        const ImageSendGen = ImageReceive();
        expect(ImageSendGen.next().value).toEqual(
            fork(GetPostImageKey, action)
        );
    });
});
