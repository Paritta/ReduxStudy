import React from "react";
import { connect } from "react-redux";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";
import { commentSendRequest } from "../../modules/Comment/CommentSend";
import { getCommentReceive } from "../../selector";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentContainer = ({ commentSendRequest, CommentReceive, postId, username }) => {
    return (
        <Wrapper>
            <ModalStudyCommentList
                commentSendRequest={commentSendRequest}
                CommentReceive={CommentReceive}
                postId={postId}
                username={username}
            />
        </Wrapper>
    )
};

ModalStudyCommentContainer.propTypes = propTypes;
ModalStudyCommentContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        CommentReceive: getCommentReceive(state)
    }),
    { commentSendRequest }
)(ModalStudyCommentContainer);
