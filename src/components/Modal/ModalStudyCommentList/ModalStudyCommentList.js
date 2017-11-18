import React from "react";
import PropTypes from "prop-types";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    position: relative;
    
    border: 2px dotted blue;
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentListHeader = styled.div`
    position: absolute;
    
    top: 0;
    left: 0;
    
    height: 2%;
    width: 100%;
    
    background: palevioletred;
`;

export const ModalStudyCommentList = () => {
    return (
            <Wrapper>
                <ModalStudyCommentListHeader>Header</ModalStudyCommentListHeader>
                <ModalStudyComment />
                ModalStudyCommentList
                <hr />
                <ModalStudyCommentListForm />
            </Wrapper>
    )
};

ModalStudyCommentList.propTypes = propTypes;
ModalStudyCommentList.defaultTypes = defaultTypes;

export default ModalStudyCommentList;
