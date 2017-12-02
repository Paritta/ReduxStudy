import React from "react";
import { TopPopu } from "./TopPopu";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const PageData = {
        pending: {}
    };

    const tree = ReactTestRenderer.create(
        <TopPopu
            PageData={PageData}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
