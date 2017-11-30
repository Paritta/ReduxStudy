import React from "react";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../modules/Modal/Modal";
import { animateTurn, animateDown } from "../../modules/Feature/Animate";
import ModalSignUp from "../../components/Modal/ModalSignUp/ModalSignUp";
import PropTypes from "prop-types";
import { getModal, getAniamte } from "../../selector";

const propTypes = {
    Modal: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    animateTurn: PropTypes.func,
    animateDown: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    showModal() {},
    hideModal() {},
    Animate: {},
    animateTurn() {},
    animateDown() {},
};

const ModalSignUpContainer = ({ showModal, hideModal, animateTurn, animateDown, Animate }) => {
    return (
        <div>
            <ModalSignUp
                showModal={showModal}
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
            />
        </div>
    )
};

ModalSignUpContainer.propTypes = propTypes;
ModalSignUpContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        Animate: getAniamte(state)
    }),
    { showModal, hideModal, animateTurn, animateDown }
)(ModalSignUpContainer);
