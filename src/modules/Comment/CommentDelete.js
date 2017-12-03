import { createAction, handleActions } from "redux-actions";

const COMMENT_DELETE_REQUEST = "comment/comment_delete_Request";
const COMMENT_DELETE_SUCCESS = "comment/comment_delete_Success";
const COMMENT_DELETE_FAILURE = "comment/comment_delete_Failure";

export const commentDeleteRequest = createAction(COMMENT_DELETE_REQUEST);
export const commentDeleteSuccess = createAction(COMMENT_DELETE_SUCCESS);
export const commentDeleteFailure = createAction(COMMENT_DELETE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [COMMENT_DELETE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [COMMENT_DELETE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [COMMENT_DELETE_FAILURE]: (state, action) => {
        console.log(action.error);
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




