import React from "react";
import { ModalStudyCommentList } from "./ModalStudyCommentList";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Layout render correctly", () => {
    const tree = ReactTestRenderer.create(
        <ModalStudyCommentList />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
