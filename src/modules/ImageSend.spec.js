import { imageSendRequest, imageSendSuccess, imageSendFailure } from "./ImageSend";

describe("ImageReceive reducer", () => {
    it("should handle IMAGE_SEND_REQUEST", () => {
        const nextState = imageSendRequest();
        expect(nextState).toEqual({
            type: "image/image_send_Request"
        })
    });

    it("should handle IMAGE_SEND_SUCCESS", () => {
        const nextState = imageSendSuccess();
        expect(nextState).toEqual({
            type: "image/image_send_Success"
        })
    });

    it("should handle IMAGE_SEND_FAILURE", () => {
        const nextState = imageSendFailure();
        expect(nextState).toEqual({
            type: "image/image_send_Failure"
        })
    });
});
