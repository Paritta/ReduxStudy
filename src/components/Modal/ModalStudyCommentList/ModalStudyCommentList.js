import React from "react";
import PropTypes from "prop-types";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";

const propTypes = {
};

const defaultTypes = {
};

export const ModalStudyCommentList = () => {
    return (
        <div>
            <ModalStudyComment />
            ModalStudyCommentList
        </div>
    )
};

ModalStudyCommentList.propTypes = propTypes;
ModalStudyCommentList.defaultTypes = defaultTypes;

export default ModalStudyCommentList;
