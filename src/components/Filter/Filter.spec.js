import React from "react";
import { Filter } from "./Filter";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Filter />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
