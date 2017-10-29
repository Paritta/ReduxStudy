import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal";

export default combineReducers({
    Modal,
    form: formReducer,
    firebase: firebaseStateReducer,
});


