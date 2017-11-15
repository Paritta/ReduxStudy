import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalSignIn from "../../components/modal/ModalSignIn";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalSignInContainer = ({ hideModal }) => {
    return (
        <div>
            <ModalSignIn hideModal={hideModal}/>
        </div>
    )
};

ModalSignInContainer.propTypes = propTypes;
ModalSignInContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: getModal(state) }),
    { hideModal }
)(ModalSignInContainer);
