import React from "react";
import { Banner } from "./Banner";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Banner />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
