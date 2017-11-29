import { createAction, handleActions } from "redux-actions";

const HEART_DELETE_REQUEST = "heart/heart_delete_Request";
const HEART_DELETE_SUCCESS = "heart/heart_delete_Success";
const HEART_DELETE_FAILURE = "heart/heart_delete_Failure";

export const heartDeleteRequest = createAction(HEART_DELETE_REQUEST);
export const heartDeleteSuccess = createAction(HEART_DELETE_SUCCESS);
export const heartDeleteFailure = createAction(HEART_DELETE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [HEART_DELETE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [HEART_DELETE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [HEART_DELETE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;



