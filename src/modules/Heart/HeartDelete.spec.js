import { heartDeleteRequest, heartDeleteSuccess, heartDeleteFailure } from "./HeartDelete";

describe("Heart send reducer", () => {
    it("should handle HEART_DELETE_REQUEST", () => {
        const nextState = heartDeleteRequest();
        expect(nextState).toEqual({
            type: "heart/heart_delete_Request"
        })
    });

    it("should handle HEART_DELETE_SUCCESS", () => {
        const nextState = heartDeleteSuccess();
        expect(nextState).toEqual({
            type: "heart/heart_delete_Success"
        })
    });

    it("should handle HEART_DELETE_FAILURE", () => {
        const nextState = heartDeleteFailure();
        expect(nextState).toEqual({
            type: "heart/heart_delete_Failure"
        })
    });
});
