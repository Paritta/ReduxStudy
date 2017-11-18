import React from "react";
import { ModalSignInForm } from "./ModalSignInForm";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("ModalSignInForm render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalSignInForm />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
