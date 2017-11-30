import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalError } from "./ModalError";
import "jest-styled-components";

it("ModalError render correctly", () => {
    const tree = ReactTestRenderer.create(
        <ModalError />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
