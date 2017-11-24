import React from "react";
import { ModalSignUpForm } from "./ModalSignUpForm";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("ModalSignUpForm render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalSignUpForm />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
