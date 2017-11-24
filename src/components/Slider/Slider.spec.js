import React from "react";
import { Slider } from "./Slider";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Slider />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
