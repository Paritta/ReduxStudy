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
        postId: "",
        data: {
            username: "",
            values: {
                Category: "",
                introduction: "웹 해킹 스터디",
                Location: "중앙도서관 하늘 정원",
                Number: "8명",
                StudyTitle: "웹 해킹",
                Time : "매주 월요일 7시",
            }
        },
        author: ""
    }
};

it("ModalStudy render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Provider store={store}>
            <ModalStudy
                Modal={ Modal }
            />
        </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
