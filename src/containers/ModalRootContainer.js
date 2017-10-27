import React from "react";
import ModalRegister from "../components/ModalRegister";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MODAL_COMPONENTS ={
    'MODAL_REGISTER': ModalRegister,
};

function ModalRootContainer ({ modalTypes, modalProps }) {
    if (!modalTypes) {
        return <span />
    }

    const SpecificModal = MODAL_COMPONENTS[modalTypes];
    return <SpecificModal {...modalProps} />
}

export default connect(
    state => ({ Modal: state.Modal }),
)(ModalRootContainer);