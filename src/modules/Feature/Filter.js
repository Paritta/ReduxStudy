import { createAction, handleActions } from "redux-actions";

const FILTER_MATERIAL = "filter/filter_Material";
const FILTER_NURSING = "filter/filter_Nursing";
const FILTER_INFORMATION = "filter/filter_Information";
const FILTER_COMPUTER = "filter/filter_Computer";
const FILTER_CHEMICAL = "filter/filter_Chemical";

export const filterMaterial = createAction(FILTER_MATERIAL);
export const filterNursing = createAction(FILTER_NURSING);
export const filterInformation = createAction(FILTER_INFORMATION);
export const filterComputer = createAction(FILTER_COMPUTER);
export const filterChemical = createAction(FILTER_CHEMICAL);

const initialState = {
    Filter: "filter_Material"
};

const reducer = handleActions({
    [FILTER_MATERIAL]: (state, action) => {
        return {
            Filter: action.payload
        }
    },
    [FILTER_NURSING]: (state, action) => {
        return {
            Filter: action.payload
        }
    },
    [FILTER_INFORMATION]: (state, action) => {
        return {
            Filter: action.payload
        }
    },
    [FILTER_COMPUTER]: (state, action) => {
        return {
            Filter: action.payload
        }
    },
    [FILTER_CHEMICAL]: (state, action) => {
        return {
            Filter: action.payload
        }
    },
}, initialState);

export default reducer;
