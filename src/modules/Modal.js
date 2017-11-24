import { createAction, handleActions } from "redux-actions";

const SHOW_MODAL = "Modal/show_Modal";
const HIDE_MODAL = "Modal/hide_Modal";

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = {
    modalType: null,
    modalProps: {}
};

const reducer = handleActions({
    [SHOW_MODAL]: (state, action) => {
        return {
            modalType: action.payload.modalType,
            modalProps: action.payload.modalProps,
        }
    },
    [HIDE_MODAL]: (state, action) => {
        return initialState
    }
}, initialState);

export default reducer;
