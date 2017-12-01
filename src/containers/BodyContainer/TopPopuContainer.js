import React from "react";
import TopPopu from "../../components/TopPopu/TopPopu";
import { getFirebase } from "react-redux-firebase";

const propTypes = {
};

const defaultTypes = {
};

class TopPopuContainer extends React.Component {
    componentDidMount () {

    }

    render () {
        return (
            <div>
                <TopPopu />
            </div>
        )
    }
}

TopPopuContainer.propTypes = propTypes;
TopPopuContainer.defaultTypes = defaultTypes;

export default TopPopuContainer;
