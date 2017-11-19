import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalBoxLeftPage } from "./ModalBoxLeftPage";
import "jest-styled-components";

it("Component render correctly", () => {
    const tree = ReactTestRenderer.create(
        <ModalBoxLeftPage />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
