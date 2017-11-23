import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import { animateTurn, animateDown } from "../../modules/Animate";
import ModalImage from "../../components/Modal/ModalImage/ModalImage";
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

const ModalImageContainer = ({ hideModal, animateTurn, animateDown, Animate }) => {
    return (
        <div>
            <ModalImage
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
            />
        </div>
    )
};

ModalImageContainer.propTypes = propTypes;
ModalImageContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        Animate: getAniamte(state)
    }),
    { hideModal, animateTurn, animateDown }
)(ModalImageContainer);
