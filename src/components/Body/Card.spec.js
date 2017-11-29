import React from "react";
import { Card } from "./Card";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Card render correctly", () => {
    const item = {
        data: {
            values: {
            },
            Image: {
                Url: {
                    
                }
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
