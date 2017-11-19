import React from "react";
import { connect } from "react-redux";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";
import { commentSendRequest } from "../../modules/CommentSend";
import { getCommentMakeArray } from "../../selector";
import { getCommentReceive } from "../../selector";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentContainer = ({ commentSendRequest, CommentMakeArray, CommentReceive, postId, username }) => {
    return (
        <Wrapper>
            <ModalStudyCommentList
                commentSendRequest={commentSendRequest}
                CommentMakeArray={CommentMakeArray}
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
        CommentMakeArray: getCommentMakeArray(state),
        CommentReceive: getCommentReceive(state)
    }),
    { commentSendRequest }
)(ModalStudyCommentContainer);
