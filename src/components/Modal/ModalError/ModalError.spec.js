import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalError } from "./ModalError";
import "jest-styled-components";

it("ModalError render correctly", () => {
    const Modal = {};
    const tree = ReactTestRenderer.create(
        <ModalError
            Modal={Modal}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
