import React from "react";
import { Header } from "./Header";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Header />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
