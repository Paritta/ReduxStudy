import React from "react";
import { Card } from "./Card";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Component render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Card />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
