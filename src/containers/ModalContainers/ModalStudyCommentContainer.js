import React from "react";
import { connect } from "react-redux";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";
import { commentSendRequest } from "../../modules/Comment/CommentSend";
import { getCommentReceive } from "../../selector";
import PropTypes from "prop-types";
import { commentReceiveRequest } from "../../modules/Comment/CommentReceive";
import { hideModal } from "../../modules/Modal/Modal";
import { pathToJS } from "react-redux-firebase";

const propTypes = {
    commentSendRequest: PropTypes.func,
    hideModal:PropTypes.func,
    CommentReceive: PropTypes.object,
    postId: PropTypes.string,
    auth: PropTypes.object,
    commentReceiveRequest: PropTypes.func,
    profile: PropTypes.object,
};

const defaultTypes = {
    commentReceiveRequest() {},
    hideModal() {},
    commentSendRequest() {},
    commentReceive: {},
    postId: "",
    auth: {},
    profile: {},
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

// auth는 ModalStudyContainer에서 옴
const ModalStudyCommentContainer = ({ commentSendRequest, CommentReceive, commentReceiveRequest, hideModal, postId, auth, profile }) => {
    return (
        <Wrapper>
            <ModalStudyCommentList
                commentSendRequest={commentSendRequest}
                CommentReceive={CommentReceive}
                commentReceiveRequest={commentReceiveRequest}
                hideModal={hideModal}
                postId={postId}
                auth={auth}
                profile={profile}
            />
        </Wrapper>
    )
};

ModalStudyCommentContainer.propTypes = propTypes;
ModalStudyCommentContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        CommentReceive: getCommentReceive(state),
        profile: pathToJS(state.firebase, "profile")
    }),
    { commentSendRequest, commentReceiveRequest, hideModal }
)(ModalStudyCommentContainer);
