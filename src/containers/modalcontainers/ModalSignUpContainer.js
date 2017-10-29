import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalSignUp from "../../components/modal/ModalSignUp";
import PropTypes from "prop-types";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalSignUpContainer = ({ hideModal }) => {
    return (
        <div>
            <ModalSignUp hideModal={hideModal}/>
        </div>
    )
};

ModalSignUpContainer.propTypes = propTypes;
ModalSignUpContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: state.Modal }),
    { hideModal }
)(ModalSignUpContainer);
