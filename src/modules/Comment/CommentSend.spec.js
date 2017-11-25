import { commentSendRequest, commentSendSuccess, commentSendFailure} from "./CommentSend";

describe("CommentSend reducer", () => {
    it("should handle COMMENT_SEND_REQUEST", () => {
        const nextState = commentSendRequest();
        expect(nextState).toEqual({
            type: "comment/comment_send_Request"
        })
    });

    it("should handle COMMENT_SEND_SUCCESS", () => {
        const nextState = commentSendSuccess();
        expect(nextState).toEqual({
            type: "comment/comment_send_Success"
        })
    });

    it("should handle COMMENT_SEND_FAILURE", () => {
        const nextState = commentSendFailure();
        expect(nextState).toEqual({
            type: "comment/comment_send_Failure"
        })
    });
});
