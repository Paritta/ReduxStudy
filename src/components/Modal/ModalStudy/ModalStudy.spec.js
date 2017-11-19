import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalStudy } from "./ModalStudy";
import "jest-styled-components";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);
const Modal = {
    modalProps: {
        postId: "1"
    }
};

it("ModalSignUp render correctly", () => {

    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalStudy
                Modal={ Modal }
            />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
