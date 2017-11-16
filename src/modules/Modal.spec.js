import { hideModal } from "./Modal";

describe("Modal reducer", () => {
    it("should handle HIDE_MODAL", () => {
        const initialState = {
            modalType: null,
            modalProps: {}
        };

        const action = {};

        const nextState = hideModal(initialState, action);
        expect(nextState).toEqual({
            payload: {
                defaultFilter: "filter_Material"
            },
            type: "filter/filter_Chemical"
        })
    });
});
