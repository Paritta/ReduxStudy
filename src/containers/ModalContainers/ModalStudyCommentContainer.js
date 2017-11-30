import React from "react";
import { connect } from "react-redux";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";
import { commentSendRequest } from "../../modules/Comment/CommentSend";
import { commentReceiveRequest } from "../../modules/Comment/CommentReceive";
import { hideModal } from "../../modules/Modal/Modal";
import { commentDeleteRequest } from "../../modules/Comment/CommentDelete";
import { getCommentReceive } from "../../selector";
import PropTypes from "prop-types";
import { pathToJS } from "react-redux-firebase";

const propTypes = {
    CommentReceive: PropTypes.object,
    commentReceiveRequest: PropTypes.func,
    commentDeleteRequest: PropTypes.func,
    commentSendRequest: PropTypes.func,
    hideModal:PropTypes.func,
    postId: PropTypes.string,
    auth: PropTypes.object,
    profile: PropTypes.object,
    username: PropTypes.string,
    HeartCount: PropTypes.number,
};

const defaultTypes = {
    commentReceiveRequest() {},
    commentDeleteRequest() {},
    commentSendRequest() {},
    commentReceive: {},
    hideModal() {},
    postId: "",
    auth: {},
    username: "",
    HeartCount: 0,
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

// auth는 ModalStudyContainer에서 옴
const ModalStudyCommentContainer = ({ commentSendRequest, CommentReceive, commentReceiveRequest, commentDeleteRequest, hideModal, postId, auth, profile, username, HeartCount }) => {
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
                commentDeleteRequest={commentDeleteRequest}
                username={username}
                HeartCount={HeartCount}
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
    { commentSendRequest, commentReceiveRequest, commentDeleteRequest, hideModal }
)(ModalStudyCommentContainer);
