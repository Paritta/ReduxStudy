import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./modules/index";
import ReduxThunk from "redux-thunk";
import { reactReduxFirebase } from "react-redux-firebase";
import { firebaseConfig as fbConfig, reduxConfig } from './config';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(ReduxThunk),
        reactReduxFirebase(fbConfig, reduxConfig),
    )
);

export default store;