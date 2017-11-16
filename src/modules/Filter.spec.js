import { filterChemical } from "./Filter";

describe("Filter reducer", () => {
    it("should handle FILTER_MATERIAL", () => {
        const initialState = {
            defaultFilter: "filter_Material"
        };

        const action = {
            payload: "filter_Chemical"
        };

        const nextState = filterChemical(initialState, action);
        expect(nextState).toEqual({
            payload: {
                defaultFilter: "filter_Material"
            },
            type: "filter/filter_Chemical"
        })
    });
});