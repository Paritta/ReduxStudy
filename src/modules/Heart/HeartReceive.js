import { createAction, handleActions } from "redux-actions";

const HEART_RECEIVE_REQUEST = "heart/heart_receive_Request";
const HEART_RECEIVE_SUCCESS = "heart/heart_receive_Success";
const HEART_RECEIVE_FAILURE = "heart/heart_receive_Failure";

export const heartReceiveRequest = createAction(HEART_RECEIVE_REQUEST);
export const heartReceiveSuccess = createAction(HEART_RECEIVE_SUCCESS);
export const heartReceiveFailure = createAction(HEART_RECEIVE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [HEART_RECEIVE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [HEART_RECEIVE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [HEART_RECEIVE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;



