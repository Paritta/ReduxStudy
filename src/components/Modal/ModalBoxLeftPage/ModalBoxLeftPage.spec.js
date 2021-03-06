import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalBoxLeftPage } from "./ModalBoxLeftPage";
import "jest-styled-components";

it("Component render correctly", () => {
    const PageData= {
       data: {
           author: "",
           values: {
               Category: "",
               Number: 0,
               StudyTitle: "",
               Introduction: "",
               Location: "",
               Time: "",
           }
       }
    };

    const auth = {
        uid: {
        }
    };

    const tree = ReactTestRenderer.create(
        <ModalBoxLeftPage
            PageData={PageData}
            auth={auth}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();
});
