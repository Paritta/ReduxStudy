import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalRegister from "../../components/modal/ModalRegister";
import PropTypes from "prop-types";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalRegisterContainer = ({ hideModal }) => {
    return (
        <div>
            <ModalRegister hideModal={hideModal}/>
        </div>
    )
};

ModalRegisterContainer.propTypes = propTypes;
ModalRegisterContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: state.Modal }),
    { hideModal }
)(ModalRegisterContainer);
