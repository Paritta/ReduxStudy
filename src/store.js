import { createStore, applyMiddleware } from "redux";
import reducers from "./modules/index";
import ReduxThunk from "redux-thunk";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk));

export default store;