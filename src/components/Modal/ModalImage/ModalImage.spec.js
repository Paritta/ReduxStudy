import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalImage } from "./ModalImage";
import "jest-styled-components";

it("Component render correctly", () => {
    const tree = ReactTestRenderer.create(
        <ModalImage />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
