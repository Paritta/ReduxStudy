import React from "react";
import TopPopu from "../../components/TopPopu/TopPopu";
import { toppopuReceiveRequest } from "../../modules/TopPopu/TopPopu";
import { connect } from "react-redux";
import { getTopPopu } from "../../selector";

const propTypes = {
};

const defaultTypes = {
};

class TopPopuContainer extends React.Component {
    componentDidMount () {
        this.props.toppopuReceiveRequest();
    }

    render () {
        return (
            <div>
                <TopPopu
                    PageData={this.props.TopPopu}
                />
            </div>
        )
    }
}

TopPopuContainer.propTypes = propTypes;
TopPopuContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
       TopPopu: getTopPopu(state)
    }),
    { toppopuReceiveRequest }
)(TopPopuContainer);
