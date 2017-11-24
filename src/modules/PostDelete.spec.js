import { postDeleteRequest, postDeleteSuccess, postDeleteFailure} from "./PostDelete";

describe("PostDelete reducer", () => {
    it("should handle POST_DELETE_REQUEST", () => {
        const nextState = postDeleteRequest();
        expect(nextState).toEqual({
            type: "post/post_delete_Request"
        })
    });

    it("should handle POST_DELETE_SUCCESS", () => {
        const nextState = postDeleteSuccess();
        expect(nextState).toEqual({
            type: "post/post_delete_Success"
        })
    });

    it("should handle POST_DELETE_FAILURE", () => {
        const nextState = postDeleteFailure();
        expect(nextState).toEqual({
            type: "post/post_delete_Failure"
        })
    });
});
