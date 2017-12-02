import React from "react";
import TopPopu from "../../components/TopPopu/TopPopu";
import { toppopuReceiveRequest } from "../../modules/TopPopu/TopPopu";
import { connect } from "react-redux";
import { getTopPopu } from "../../selector";
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import { compose } from "redux";
import PropTypes from "prop-types";

const propTypes = {
    auth: PropTypes.object,
};

const defaultTypes = {
    auth: {},
};

class TopPopuContainer extends React.Component {
    componentDidMount () {
        this.props.toppopuReceiveRequest();
    }

    render () {
        const { auth } = this.props;

        return (
            <div>
                <TopPopu
                    PageData={this.props.TopPopu}
                    auth={auth}
                />
            </div>
        )
    }
}

TopPopuContainer.propTypes = propTypes;
TopPopuContainer.defaultTypes = defaultTypes;

export default compose(
    connect(
        state => ({
            TopPopu: getTopPopu(state),
            auth: pathToJS(state.firebase, "auth")
        }),
        { toppopuReceiveRequest }
    )
)(TopPopuContainer);
