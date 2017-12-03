import React from "react";
import { ModalStudyComment } from "./ModalStudyComment";
import "jest-styled-components";
import ReactTestRenderer from "react-test-renderer";

it("Layout render correctly", () => {
    const CommentReceive = {
        pending: false,
        data: []
    };

    const Comment= {
        CommentId: {
        }
    };

    const auth = {
        uid: { }
    };

    const tree = ReactTestRenderer.create(
        <ModalStudyComment
            CommentReceive={CommentReceive}
            Comment={Comment}
            auth={auth}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
