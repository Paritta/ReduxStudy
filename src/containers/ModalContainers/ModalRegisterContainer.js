import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import { animateTurn, animateDown } from "../../modules/Feature/Animate";
import {  fetchRequest } from "../../modules/Post/PostFetch";
import ModalRegister from "../../components/Modal/ModalRegister/ModalRegister";
import PropTypes from "prop-types";
import { getModal, getAniamte } from "../../selector";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    animateTurn: PropTypes.func,
    animateDown: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    animateTurn() {},
    animateDown() {},
};

const ModalRegisterContainer = ({ hideModal, animateTurn, animateDown, Animate, fetchRequest }) => {
    return (
        <div>
            <ModalRegister
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
                fetchRequest={fetchRequest}
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
    { hideModal, animateTurn, animateDown, fetchRequest }
)(ModalRegisterContainer);
