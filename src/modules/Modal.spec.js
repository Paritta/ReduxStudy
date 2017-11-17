import { hideModal, showModal } from "./Modal";

describe("Modal reducer", () => {
    it("should handle HIDE_MODAL", () => {
        const nextState = hideModal();
        expect(nextState).toEqual({
            type: "modal/hide_Modal"
        })
    });

    it("should handle SHOW_MODAL", () => {
        const nextState = showModal({
            modalType: null,
            modalProps: {}
        });
        expect(nextState).toEqual({
            type: "modal/show_Modal",
            payload: {
                modalType: null,
                modalProps: {}
            }
        })
    });
});
