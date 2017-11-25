import { createAction, handleActions } from "redux-actions";

const ANIMATE_TURN = "animate/animate_Turn";
const ANIMATE_DOWN = "animate/animate_Down";

export const animateTurn = createAction(ANIMATE_TURN);
export const animateDown = createAction(ANIMATE_DOWN);

const initialState = {
    AnimateOut: false
};

const reducer = handleActions({
    [ANIMATE_TURN]: (state) => {
        return {
            AnimateOut: true
        }
    },
    [ANIMATE_DOWN]: (state) => {
        return {
            AnimateOut: false
        }
    }
}, initialState);

export default reducer;




