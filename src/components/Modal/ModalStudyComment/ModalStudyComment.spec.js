import React from "react";
import { ModalStudyComment } from "./ModalStudyComment";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Layout render correctly", () => {
    const CommentReceive = {
        pending: false,
        data: []
    };

    const CommentId = "";

    const tree = ReactTestRenderer.create(
        <ModalStudyComment
            CommentReceive={CommentReceive}
            CommentId={CommentId}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
