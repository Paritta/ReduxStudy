import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import { animateTurn, animateDown } from "../../modules/Feature/Animate";
import { fetchRequest } from "../../modules/Post/PostFetch";
import { toppopuReceiveRequest } from "../../modules/TopPopu/TopPopu";
import ModalSignIn from "../../components/Modal/ModalSignIn/ModalSignIn";
import PropTypes from "prop-types";
import { getModal, getAniamte } from "../../selector";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    animateTurn: PropTypes.func,
    animateDown: PropTypes.func,
    fetchRequest: PropTypes.func,
    toppopuReceiveRequest: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    animateTurn() {},
    fetchRequest() {},
    toppopuReceiveRequest() {},
};

const ModalSignInContainer = ({ hideModal, animateTurn, animateDown, Animate, fetchRequest, toppopuReceiveRequest }) => {
    return (
        <div>
            <ModalSignIn
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
                fetchRequest={fetchRequest}
                toppopuReceiveRequest={toppopuReceiveRequest}
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
    { hideModal, animateTurn, animateDown, fetchRequest, toppopuReceiveRequest }
)(ModalSignInContainer);
