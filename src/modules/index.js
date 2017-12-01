import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import Modal from "./Modal/Modal";
import Filter from "./Feature/Filter";
import Fetch from "./Post/PostFetch";
import CommentReceive from "./Comment/CommentReceive";
import CommentDelete from "./Comment/CommentDelete";
import Reloading from "./Feature/Reloading";
import Animate from "./Feature/Animate";
import PostDelete from "./Post/PostDelete";
import ImageSend from "./Image/ImageSend";
import ImageReceive from "./Image/ImageReceive";
import HeartSend from "./Heart/HeartSend";
import HeartReceive from "./Heart/HeartDelete";
import TopPopu from "./TopPopu/TopPopu";

export default combineReducers({
    Modal,
    Filter,
    Fetch,
    CommentReceive,
    CommentDelete,
    Reloading,
    Animate,
    PostDelete,
    ImageSend,
    ImageReceive,
    HeartSend,
    HeartReceive,
    TopPopu,
    form: formReducer,
    firebase: firebaseStateReducer,
});


