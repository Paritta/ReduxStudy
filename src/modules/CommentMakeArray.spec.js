import { commentMakeArrayRequest, commentMakeArraySuccess, commentMakeArrayFailure} from "./CommentMakeArray";

describe("CommentMakeArray reducer", () => {
    it("should handle COMMENT_SEND_REQUEST", () => {
        const nextState = commentMakeArrayRequest();
        expect(nextState).toEqual({
            type: "comment/comment_make_array_Request"
        })
    });

    it("should handle COMMENT_SEND_SUCCESS", () => {
        const nextState = commentMakeArraySuccess();
        expect(nextState).toEqual({
            type: "comment/comment_make_array_Success"
        })
    });

    it("should handle COMMENT_SEND_FAILURE", () => {
        const nextState = commentMakeArrayFailure();
        expect(nextState).toEqual({
            type: "comment/comment_make_array_Failure"
        })
    });
});
