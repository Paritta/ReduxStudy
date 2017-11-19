import { commentRecieveRequest, commentRecieveSuccess, commentRecieveFailure} from "./CommentReceive";

describe("CommentFetch reducer", () => {
    it("should handle COMMENT_SEND_REQUEST", () => {
        const nextState = commentRecieveRequest();
        expect(nextState).toEqual({
            type: "comment/comment_receive_Request"
        })
    });

    it("should handle COMMENT_SEND_SUCCESS", () => {
        const nextState = commentRecieveSuccess();
        expect(nextState).toEqual({
            type: "comment/comment_receive_Success"
        })
    });

    it("should handle COMMENT_SEND_FAILURE", () => {
        const nextState = commentRecieveFailure();
        expect(nextState).toEqual({
            type: "comment/comment_receive_Failure"
        })
    });
});
