import React from "react";
import PropTypes from "prop-types";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    display: relative;
    
    border: 2px dotted blue;
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentListHeader = styled.div`
    display: absolute;
    
    height: 20%;
    width: 100%;
    
    background: palevioletred;
`;

export const ModalStudyCommentList = () => {
    return (
        <div>
            <Wrapper>
                <ModalStudyCommentListHeader>Header</ModalStudyCommentListHeader>
                <ModalStudyComment />
                ModalStudyCommentList
            </Wrapper>
        </div>
    )
};

ModalStudyCommentList.propTypes = propTypes;
ModalStudyCommentList.defaultTypes = defaultTypes;

export default ModalStudyCommentList;
