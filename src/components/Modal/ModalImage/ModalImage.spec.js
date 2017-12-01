import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalImage } from "./ModalImage";
import "jest-styled-components";

it("Component render correctly", () => {
    const Animate = {
        AniamteOut: {}
    };

    function addEventListener () { }

    const tree = ReactTestRenderer.create(
        <ModalImage
            Animate={Animate}
            addEventListener={addEventListener}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
