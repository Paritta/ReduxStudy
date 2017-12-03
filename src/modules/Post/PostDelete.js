import { createAction, handleActions } from "redux-actions";

const POST_DELETE_REQUEST = "post/post_delete_Request";
const POST_DELETE_SUCCESS = "post/post_delete_Success";
const POST_DELETE_FAILURE = "post/post_delete_Failure";

export const postDeleteRequest = createAction(POST_DELETE_REQUEST);
export const postDeleteSuccess = createAction(POST_DELETE_SUCCESS);
export const postDeleteFailure = createAction(POST_DELETE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [POST_DELETE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [POST_DELETE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [POST_DELETE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




