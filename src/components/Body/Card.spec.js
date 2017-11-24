import React from "react";
import { Card } from "./Card";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const item = {
        data: {
            values: {
            }
        }
    };

    const tree = ReactTestRenderer.create(
        <Card
            item={item}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
