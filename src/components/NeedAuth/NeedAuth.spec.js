import React from "react";
import { NeedAuth } from "./NeedAuth";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <NeedAuth />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
