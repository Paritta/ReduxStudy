import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalSignIn } from "./ModalSignIn";
import "jest-styled-components";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("ModalSignIn render correctly", () => {
    const Animate = {
        AnimateOut: ""
    };

    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalSignIn
                Animate={Animate}
            />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
