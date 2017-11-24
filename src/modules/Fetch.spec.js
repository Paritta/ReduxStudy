import { fetchFailure, fetchRequest, fetchSuccess } from "./Fetch";

describe("Fetch reducer", () => {
    it("should handle FETCH_REQUEST", () => {
        const nextState = fetchRequest();
        expect(nextState).toEqual({
            type: "fetch/fetch_Request"
        })
    });

    it("should handle FETCH_SUCCESS", () => {
        const nextState = fetchSuccess();
        expect(nextState).toEqual({
            type: "fetch/fetch_Success"
        })
    });

    it("should handle FETCH_FAILURE", () => {
        const nextState = fetchFailure();
        expect(nextState).toEqual({
            type: "fetch/fetch_Failure"
        })
    });
});
