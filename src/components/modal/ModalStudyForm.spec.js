import React from "react";
import { ModalStudyForm } from "./ModalStudyForm";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("ModalStudyForm render correctly", () => {
    const tree = ReactTestRenderer.create(
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
