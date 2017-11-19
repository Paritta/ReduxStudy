import React from "react";
import PropTypes from "prop-types";
import { commentReceiveRequest } from "../../../modules/CommentReceive";
import { connect } from "react-redux";
import { getCommentReceive } from "../../../selector";

const propTypes = {
    CommentId: PropTypes.string.isRequired,
};

const defaultTypes = {
    CommentId: ""
};

export class ModalStudyComment extends React.Component {
    render () {
        const { CommentReceive } = this.props;

        return (
            <div>
                <div>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        CommentReceive.data[this.props.CommentId].comment
                    }
                    <br />
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        CommentReceive.data[this.props.CommentId].NickName
                    }
                    <br />
                    {this.props.CommentId}
                </div>
            </div>
        )
    }
}

ModalStudyComment.propTypes = propTypes;
ModalStudyComment.defaultTypes = defaultTypes;

export default connect(
    state => ({ CommentReceive: getCommentReceive(state) }),
    { commentReceiveRequest }
)(ModalStudyComment);

