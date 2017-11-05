import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal";
import Filter from "./Filter";

export default combineReducers({
    Modal,
    Filter,
    form: formReducer,
    firebase: firebaseStateReducer,
});


