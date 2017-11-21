import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import { animateTurn, animateDown } from "../../modules/Animate";
import ModalRegister from "../../components/Modal/ModalRegister/ModalRegister";
import PropTypes from "prop-types";
import { getModal, getAniamte } from "../../selector";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    animateTurn: PropTypes.func,
    animateDown: PropTypes.func
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    animateTurn() {}
};

const ModalRegisterContainer = ({ hideModal, animateTurn, animateDown, Animate }) => {
    return (
        <div>
            <ModalRegister
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
            />
        </div>
    )
};

ModalRegisterContainer.propTypes = propTypes;
ModalRegisterContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        Animate: getAniamte(state)
    }),
    { hideModal, animateTurn, animateDown }
)(ModalRegisterContainer);
