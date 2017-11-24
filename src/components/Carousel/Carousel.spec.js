import React from "react";
import { Slider } from "./Carousel";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Slider />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
