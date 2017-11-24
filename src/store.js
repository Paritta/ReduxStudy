import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./modules/index";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { firebaseConfig as fbConfig, reduxConfig } from './config';
import createSagaMiddlewares from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddlewares();

const middleware = [sagaMiddleware];

const createStoreWithFirebase = compose(
    reactReduxFirebase(fbConfig, reduxConfig),
    applyMiddleware(...middleware)
)(createStore);

const store = createStoreWithFirebase(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// when calling saga, pass getFirebase
sagaMiddleware.run(rootSaga, getFirebase);

export default store;