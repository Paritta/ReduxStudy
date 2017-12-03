import React from "react";
import { watchImageSend, ImageSend, AddAndPush } from "./ImageSend";
import { takeEvery, call, put } from "redux-saga/effects";

describe("handle ImageSend", () => {
    it("it should send request", () => {
        const WatchGen = watchImageSend();
        expect(WatchGen.next().value).toEqual(
            takeEvery("image/image_send_Request", ImageSend)
        );
    });

    const action = undefined;
    it("it should call AddAndPush and image_send_Success", () => {
        const ImageSendGen = ImageSend();
        expect(ImageSendGen.next().value).toEqual(
            call(AddAndPush, action)
        );
        
        expect(ImageSendGen.next().value).toEqual(
            put({ type: "image/image_send_Success" })
        );
    });
    //
});
