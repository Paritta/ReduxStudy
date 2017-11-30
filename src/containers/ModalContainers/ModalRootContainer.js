import React from "react";
import ModalRegisterContainer from "./ModalRegisterContainer";
import ModalSignInContainer from "./ModalSignInContainer";
import ModalSignUpContainer from "./ModalSignUpContainer";
import ModalStudyContainer from "./ModalStudyContainer";
import ModalImageContainer from "./ModalImageContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    Modal: PropTypes.object,
};

const MODAL_COMPONENTS ={
    "MODAL_REGISTER": ModalRegisterContainer,
    "MODAL_SIGNIN": ModalSignInContainer,
    "MODAL_SIGNUP": ModalSignUpContainer,
    "MODAL_STUDY": ModalStudyContainer,
    "MODAL_IMAGE": ModalImageContainer,
};

function ModalRootContainer ({ Modal }) {
    if (!Modal.modalType) {
        return <span></span>
    }

    const SpecificModal = MODAL_COMPONENTS[Modal.modalType];
    return <SpecificModal {...Modal.modalProps} />
}

ModalRootContainer.propTypes = propTypes;

export default connect(
    state => ({ Modal: getModal(state) }),
    {},
)(ModalRootContainer);