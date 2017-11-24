import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import { animateTurn, animateDown } from "../../modules/Animate";
import ModalSignIn from "../../components/Modal/ModalSignIn/ModalSignIn";
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

const ModalSignInContainer = ({ hideModal, animateTurn, animateDown, Animate }) => {
    return (
        <div>
            <ModalSignIn
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
            />
        </div>
    )
};

ModalSignInContainer.propTypes = propTypes;
ModalSignInContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        Animate: getAniamte(state)
    }),
    { hideModal, animateTurn, animateDown }
)(ModalSignInContainer);
