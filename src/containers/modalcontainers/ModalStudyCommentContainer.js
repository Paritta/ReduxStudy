import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalStudyCommentList from "../../components/Modal/ModalStudyCommentList/ModalStudyCommentList";
import styled from "styled-components";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    border: 2px dotted blue;
    
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentContainer = () => {
    return (
        <Wrapper>
            ModalStudyCommentContainer
            <ModalStudyCommentList />
        </Wrapper>
    )
};

ModalStudyCommentContainer.propTypes = propTypes;
ModalStudyCommentContainer.defaultTypes = defaultTypes;

export default connect(
)(ModalStudyCommentContainer);
