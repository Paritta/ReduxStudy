import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal";
import Filter from "./Filter";
import Fetch from "./Fetch";

export default combineReducers({
    Modal,
    Filter,
    Fetch,
    form: formReducer,
    firebase: firebaseStateReducer,
});


