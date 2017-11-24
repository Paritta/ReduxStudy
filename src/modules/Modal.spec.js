import { hideModal, showModal } from "./Modal";

describe("Modal reducer", () => {
    it("should handle HIDE_MODAL", () => {
        const nextState = hideModal();
        expect(nextState).toEqual({
            type: "Modal/hide_Modal"
        })
    });

    it("should handle SHOW_MODAL", () => {
        const nextState = showModal({
            modalType: null,
            modalProps: {}
        });
        expect(nextState).toEqual({
            type: "Modal/show_Modal",
            payload: {
                modalType: null,
                modalProps: {}
            }
        })
    });
});
