import React from "react";
import ModalRegisterContainer from "./ModalRegisterContainer";
import ModalSignInContainer from "./ModalSignInContainer";
import ModalSignUpContainer from "./ModalSignUpContainer"
import { connect } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {
    Modal: PropTypes.object,
}

const MODAL_COMPONENTS ={
    "MODAL_REGISTER": ModalRegisterContainer,
    "MODAL_SIGNIN": ModalSignInContainer,
    "MODAL_SIGNUP": ModalSignUpContainer,
};

function ModalRootContainer ({ Modal }) {
    if (!Modal.modalType) {
        return <div>No Modal</div>
    }

    const SpecificModal = MODAL_COMPONENTS[Modal.modalType];
    // return <SpecificModal {...modalProps} />
    // https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680#35641680
    return <SpecificModal />
};

ModalRootContainer.propTypes = propTypes;

export default connect(
    state => ({ Modal: state.Modal }),
    {},
)(ModalRootContainer);