import { createAction, handleActions } from "redux-actions";

const IMAGE_SEND_REQUEST = "image/image_send_Request";
const IMAGE_SEND_SUCCESS = "image/image_send_Success";
const IMAGE_SEND_FAILURE = "image/image_send_Failure";

export const imageSendRequest = createAction(IMAGE_SEND_REQUEST);
export const imageSendSuccess = createAction(IMAGE_SEND_SUCCESS);
export const imageSendFailure = createAction(IMAGE_SEND_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [IMAGE_SEND_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [IMAGE_SEND_SUCCESS]: (state, action) => {
        console.log(action.payload);
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [IMAGE_SEND_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;




