import { createAction, handleActions } from "redux-actions";

const TOPPOPU_RECEIVE_REQUEST = "toppopu/toppopu_receive_Request";
const TOPPOPU_RECEIVE_SUCCESS = "toppopu/toppopu_receive_Success";
const TOPPOPU_RECEIVE_FAILURE = "toppopu/toppopu_receive_Failure";

export const toppopuReceiveRequest = createAction(TOPPOPU_RECEIVE_REQUEST);
export const toppopuReceiveSuccess = createAction(TOPPOPU_RECEIVE_SUCCESS);
export const toppopuReceiveFailure = createAction(TOPPOPU_RECEIVE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [TOPPOPU_RECEIVE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [TOPPOPU_RECEIVE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [TOPPOPU_RECEIVE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;



