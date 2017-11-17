import React from "react";
import ReactTestRenderer from "react-test-renderer"
import { ModalRegister } from "./ModalRegister";
import "jest-styled-components";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {};
const store = mockStore(initialState);

it("Component render correctly", () => {
   const tree = ReactTestRenderer.create(
       <Provider store={store}>
           <ModalRegister />
       </Provider>
   );
   expect(tree.toJSON()).toMatchSnapshot();
});
