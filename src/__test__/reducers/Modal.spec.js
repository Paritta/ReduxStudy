import React from "react";
import Modal from "../../modules/Modal";

describe("Check Modal reducers", () => {
    it("handle SHOW_MODAL", () => {
        const initialState = {
            modalType: null,
            modalProps: {}
        };

        const action = {
            type: "modal/show_Modal",
            payload: {
                modalType: "SHOW_MODAL",
                modalProps: {},
            }
        };

        const nextState = Modal(initialState, action);
        expect(nextState).toEqual({
            modalType: "SHOW_MODAL",
            modalProps: {}
        });
    });

    it("handle HIDE_MODAL", () => {
        const initialState = {
            modalType: "SHOW_MODAL",
            modalProps: {}
        };

        const action = {
            type: "modal/hide_Modal",
            payload: {
                modalType: "HIDE_MODAL",
                modalProps: {},
            }
        };

        const nextState = Modal(initialState, action);
        expect(nextState).toEqual({
            modalType: null,
            modalProps: {}
        });
    });
})

