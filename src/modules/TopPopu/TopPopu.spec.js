import { toppopuReceiveSuccess, toppopuReceiveRequest, toppopuReceiveFailure } from "./TopPopu";

describe("TopPopu reducer", () => {
    it("should handle TOPPOPU_RECEIVE_REQUEST", () => {
        const nextState = toppopuReceiveRequest();
        expect(nextState).toEqual({
            type: "toppopu/toppopu_receive_Request"
        })
    });

    it("should handle TOPPOPU_RECEIVE_SUCCESS", () => {
        const nextState = toppopuReceiveSuccess();
        expect(nextState).toEqual({
            type: "toppopu/toppopu_receive_Success"
        })
    });

    it("should handle TOPPOPU_RECEIVE_FAILURE", () => {
        const nextState = toppopuReceiveFailure();
        expect(nextState).toEqual({
            type: "toppopu/toppopu_receive_Failure"
        })
    });
});
