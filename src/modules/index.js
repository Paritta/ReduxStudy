import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import Modal from "./Modal";

export default combineReducers({
    Modal,
    firebase: firebaseStateReducer,
});


