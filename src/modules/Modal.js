import { createAction, handleActions } from "redux-actions";

const SHOW_MODAL = "modal/show_Modal";
const HIDE_MODAL = "modal/hide_Modal";

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = {
    modalTypes: null,
    modalProps: {}
};

const reducer = handleActions({
    [SHOW_MODAL]: (state, action) => {

    },
    [HIDE_MODAL]: (state, action) => {

    }
}, initialState);

export default reducer;
