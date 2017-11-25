import React from "react";
import { Card } from "./Card";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";
import {imageReceiveRequest} from "../../modules/ImageReceive";

it("Card render correctly", () => {
    const item = {
        data: {
            values: {
            }
        }
    };

    const ImageReceive = {
        pending: {

        },
        data : {
            length: 0
        }
    };

    function imageReceiveRequest () {

    }

    const tree = ReactTestRenderer.create(
        <Card
            item={item}
            ImageReceive={ImageReceive}
            imageReceiveRequest={imageReceiveRequest}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
