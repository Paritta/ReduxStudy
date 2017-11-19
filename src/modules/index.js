import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal";
import Filter from "./Filter";
import Fetch from "./Fetch";
import CommentReceive from "./CommentReceive";
import CommentMakeArray from "./CommentMakeArray";
import Reloading from "./Reloading";

export default combineReducers({
    Modal,
    Filter,
    Fetch,
    CommentReceive,
    CommentMakeArray,
    Reloading,
    form: formReducer,
    firebase: firebaseStateReducer,
});


