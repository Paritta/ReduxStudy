import { createAction, handleActions } from "redux-actions";

const HEART_SEND_REQUEST = "heart/heart_send_Request";
const HEART_SEND_SUCCESS = "heart/heart_send_Success";
const HEART_SEND_FAILURE = "heart/heart_send_Failure";

export const heartSendRequest = createAction(HEART_SEND_REQUEST);
export const heartSendSuccess = createAction(HEART_SEND_SUCCESS);
export const heartSendFailure = createAction(HEART_SEND_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [HEART_SEND_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [HEART_SEND_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [HEART_SEND_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;



