import { commentDeleteRequest, commentDeleteSuccess, commentDeleteFailure } from "./CommentDelete";

describe("CommentDelete reducer", () => {
    it("should handle COMMENT_DELETE_REQUEST", () => {
        const nextState = commentDeleteRequest();
        expect(nextState).toEqual({
            type: "comment/comment_delete_Request"
        })
    });

    it("should handle COMMENT_DELETE_SUCCESS", () => {
        const nextState = commentDeleteSuccess();
        expect(nextState).toEqual({
            type: "comment/comment_delete_Success"
        })
    });

    it("should handle COMMENT_DELETE_FAILURE", () => {
        const nextState = commentDeleteFailure();
        expect(nextState).toEqual({
            type: "comment/comment_delete_Failure"
        })
    });
});
