import React from "react";
import { connect } from "react-redux";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";
import { commentSendRequest } from "../../modules/CommentSend";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentContainer = ({ commentSendRequest }) => {
    return (
        <Wrapper>
            ModalStudyCommentContainer
            <ModalStudyCommentList commentSendRequest={commentSendRequest} />
        </Wrapper>
    )
};

ModalStudyCommentContainer.propTypes = propTypes;
ModalStudyCommentContainer.defaultTypes = defaultTypes;

export default connect(
    null,
    { commentSendRequest }
)(ModalStudyCommentContainer);
