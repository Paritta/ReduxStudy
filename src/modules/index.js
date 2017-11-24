import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal";
import Filter from "./Filter";
import Fetch from "./Fetch";
import CommentReceive from "./CommentReceive";
import Reloading from "./Reloading";
import Animate from "./Animate";
import PostDelete from "./PostDelete";
import ImageReceive from "./ImageReceive";

export default combineReducers({
    Modal,
    Filter,
    Fetch,
    CommentReceive,
    Reloading,
    Animate,
    PostDelete,
    ImageReceive,
    form: formReducer,
    firebase: firebaseStateReducer,
});


