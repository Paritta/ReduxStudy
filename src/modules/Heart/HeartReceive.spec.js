import { heartReceiveRequest, heartReceiveSuccess, heartReceiveFailure } from "./HeartReceive";

describe("Heart send reducer", () => {
    it("should handle HEART_SEND_REQUEST", () => {
        const nextState = heartReceiveRequest();
        expect(nextState).toEqual({
            type: "heart/heart_receive_Request"
        })
    });

    it("should handle HEART_SEND_SUCCESS", () => {
        const nextState = heartReceiveSuccess();
        expect(nextState).toEqual({
            type: "heart/heart_receive_Success"
        })
    });

    it("should handle HEART_SEND_FAILURE", () => {
        const nextState = heartReceiveFailure();
        expect(nextState).toEqual({
            type: "heart/heart_receive_Failure"
        })
    });
});
