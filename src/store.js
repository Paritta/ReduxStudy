import { createStore, compose } from "redux";
import reducers from "./modules/index";
import { reactReduxFirebase } from "react-redux-firebase";
import { firebaseConfig as fbConfig, reduxConfig } from './config';

// const store = createStore(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     compose(
//         reactReduxFirebase(fbConfig, reduxConfig),
//     )
// );

const createStoreWithFirebase = compose(
    reactReduxFirebase(fbConfig, reduxConfig)
)(createStore);

const store = createStoreWithFirebase(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// NOTE: If the ()() syntax seems confusing, you can always break it down into two steps:
// // ...
//
// // create new, "configured" function
//     createReduxForm = reduxForm({ form: 'contact' })
//
// // evaluate it for ContactForm component
// ContactForm = createReduxForm( ContactForm )
//
// export default ContactForm;

export default store;