import React from "react";
import { ModalStudyCommentListForm } from "./ModalStudyCommentListForm";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("Layout render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalStudyCommentListForm />
        </Provider> 
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
