import React from "react";
import { ModalStudyComment } from "./ModalStudyComment";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Layout render correctly", () => {
    const tree = ReactTestRenderer.create(
        <ModalStudyComment />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
