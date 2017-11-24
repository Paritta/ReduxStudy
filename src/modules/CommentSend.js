import { createAction, handleActions } from "redux-actions";

const COMMENT_SEND_REQUEST = "comment/comment_send_Request";
const COMMENT_SEND_SUCCESS = "comment/comment_send_Success";
const COMMENT_SEND_FAILURE = "comment/comment_send_Failure";

export const commentSendRequest = createAction(COMMENT_SEND_REQUEST);
export const commentSendSuccess = createAction(COMMENT_SEND_SUCCESS);
export const commentSendFailure = createAction(COMMENT_SEND_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [COMMENT_SEND_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [COMMENT_SEND_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [COMMENT_SEND_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




