import { createAction, handleActions } from "redux-actions";

const RELOADING_FLIP = "reloading/reloading_Flip";

export const reloadingFlip = createAction(RELOADING_FLIP);

const initialState = {
    flip: false
};

const reducer = handleActions({
    [RELOADING_FLIP]: (state) => {
        return {
            flip: !state.flip
        }
    },
}, initialState);

export default reducer;




