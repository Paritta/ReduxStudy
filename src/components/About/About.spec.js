import React from "react";
import { About } from "./About";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <About />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
