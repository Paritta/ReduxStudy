import React from "react";
import App from "../App";
import About from "../components/About/About";
import { Route, BrowserRouter } from "react-router-dom";

const propTypes = {
};

const defaultTypes = {
};

class Root extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/About" component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}

Root.propTypes = propTypes;
Root.defaultTypes = defaultTypes;

export default Root;
