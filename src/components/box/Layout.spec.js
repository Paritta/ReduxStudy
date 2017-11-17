import React from "react";
import { Layout } from "./Layout";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Layout render correctly", () => {
    const tree = ReactTestRenderer.create(
        <Layout fetchRequest={() => {}} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
