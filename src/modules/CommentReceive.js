import { createAction, handleActions } from "redux-actions";

const COMMENT_RECEIVE_REQUEST = "comment/comment_receive_Request";
const COMMENT_RECEIVE_SUCCESS = "comment/comment_receive_Success";
const COMMENT_RECEIVE_FAILURE = "comment/comment_receive_Failure";

export const commentRecieveRequest = createAction(COMMENT_RECEIVE_REQUEST);
export const commentRecieveSuccess = createAction(COMMENT_RECEIVE_SUCCESS);
export const commentRecieveFailure = createAction(COMMENT_RECEIVE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [COMMENT_RECEIVE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [COMMENT_RECEIVE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [COMMENT_RECEIVE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




