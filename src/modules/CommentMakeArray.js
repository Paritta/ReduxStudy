import { createAction, handleActions } from "redux-actions";

const COMMENT_MAKE_ARRAY_REQUEST = "comment/comment_make_array_Request";
const COMMENT_MAKE_ARRAY_SUCCESS = "comment/comment_make_array_Success";
const COMMENT_MAKE_ARRAY_FAILURE = "comment/comment_make_array_Failure";

export const commentMakeArrayRequest = createAction(COMMENT_MAKE_ARRAY_REQUEST);
export const commentMakeArraySuccess = createAction(COMMENT_MAKE_ARRAY_SUCCESS);
export const commentMakeArrayFailure = createAction(COMMENT_MAKE_ARRAY_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [COMMENT_MAKE_ARRAY_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [COMMENT_MAKE_ARRAY_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [COMMENT_MAKE_ARRAY_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




