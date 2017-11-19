import React from "react";
import { ModalStudyCommentList } from "./ModalStudyCommentList";
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
            <ModalStudyCommentList
                commentMakeArrayRequest={() => {}}
            />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
