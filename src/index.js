import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import './index.css';
import Root from './router/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
