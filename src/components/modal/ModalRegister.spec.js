import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalRegister, Wrapper } from "./ModalRegister";

describe("Check ModalRegister Component", () => {
   it("Component render correctly", () => {
       const tree = ReactTestRenderer.create(
       );
       expect(tree.toJSON()).toMatchSnapshot();
   });
});
