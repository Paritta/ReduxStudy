import { createAction, handleActions } from "redux-actions";

const FETCH_REQUEST = "fetch/fetch_Request";
const FETCH_SUCCESS = "fetch/fetch_Success";
const FETCH_FAILURE = "fetch/fetch_Failure";

export const fetchRequest = createAction(FETCH_REQUEST);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailure = createAction(FETCH_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: []
};

const reducer = handleActions({
    [FETCH_REQUEST]: (state) => {
        return {
            ...state,
            pending: true
        }
    },
    [FETCH_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload
        }
    },
    [FETCH_FAILURE]: (state, action) => {
        console.log(action.error);

        return {
            ...state,
            pending: false,
            error: true
        }
    },
}, initialState);

export default reducer;

        
        
        