import { createAction, handleActions } from "redux-actions";

const IMAGE_RECEIVE_REQUEST = "image/image_receive_Request";
const IMAGE_RECEIVE_SUCCESS = "image/image_receive_Success";
const IMAGE_RECEIVE_FAILURE = "image/image_receive_Failure";

export const imageReceiveRequest = createAction(IMAGE_RECEIVE_REQUEST);
export const imageReceiveSuccess = createAction(IMAGE_RECEIVE_SUCCESS);
export const imageReceiveFailure = createAction(IMAGE_RECEIVE_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [IMAGE_RECEIVE_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [IMAGE_RECEIVE_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: [...state.data, action.payload]
        }
    },
    [IMAGE_RECEIVE_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




