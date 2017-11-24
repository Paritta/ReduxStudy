import React from "react";
import { Footer } from "./Footer";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Footer />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
