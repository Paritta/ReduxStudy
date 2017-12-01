import React from "react";
import { TopPopu } from "./TopPopu";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <TopPopu />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
