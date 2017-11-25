import { imageReceiveRequest, imageReceiveSuccess, imageReceiveFailure } from "./ImageReceive";

describe("ImageReceive reducer", () => {
    it("should handle IMAGE_Receive_REQUEST", () => {
        const nextState = imageReceiveRequest();
        expect(nextState).toEqual({
            type: "image/image_receive_Request"
        })
    });

    it("should handle IMAGE_Receive_SUCCESS", () => {
        const nextState = imageReceiveSuccess();
        expect(nextState).toEqual({
            type: "image/image_receive_Success"
        })
    });

    it("should handle IMAGE_Receive_FAILURE", () => {
        const nextState = imageReceiveFailure();
        expect(nextState).toEqual({
            type: "image/image_receive_Failure"
        })
    });
});
