import React from "react";
import { Wrapper } from "./Layout";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Component render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Wrapper />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
