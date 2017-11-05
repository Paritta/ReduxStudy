import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalStudy from "../../components/modal/ModalStudy";
import PropTypes from "prop-types";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalStudyContainer = ({ hideModal }) => {
    return (
        <div>
            <ModalStudy hideModal={hideModal}/>
        </div>
    )
};

ModalStudyContainer.propTypes = propTypes;
ModalStudyContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: state.Modal }),
    { hideModal }
)(ModalStudyContainer);
