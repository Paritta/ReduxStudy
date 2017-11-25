import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import { animateTurn, animateDown } from "../../modules/Feature/Animate";
import ModalSignUp from "../../components/Modal/ModalSignUp/ModalSignUp";
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
    animateTurn() {},
    animateDown() {}
};

const ModalSignUpContainer = ({ hideModal, animateTurn, animateDown, Animate }) => {
    return (
        <div>
            <ModalSignUp
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
    { hideModal, animateTurn, animateDown }
)(ModalSignUpContainer);
