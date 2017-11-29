import { heartSendRequest, heartSendSuccess, heartSendFailure } from "./HeartSend";

describe("Heart send reducer", () => {
    it("should handle HEART_SEND_REQUEST", () => {
        const nextState = heartSendRequest();
        expect(nextState).toEqual({
            type: "heart/heart_send_Request"
        })
    });

    it("should handle HEART_SEND_SUCCESS", () => {
        const nextState = heartSendSuccess();
        expect(nextState).toEqual({
            type: "heart/heart_send_Success"
        })
    });

    it("should handle HEART_SEND_FAILURE", () => {
        const nextState = heartSendFailure();
        expect(nextState).toEqual({
            type: "heart/heart_send_Failure"
        })
    });
});
