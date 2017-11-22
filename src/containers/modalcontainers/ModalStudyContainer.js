import React from "react";
import { pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalStudy from "../../components/Modal/ModalStudy/ModalStudy";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    hideModal: PropTypes.func,
    profile: PropTypes.object
};

const defaultTypes = {
    hideModal() {},
    profile: {}
};

const ModalStudyContainer = ({ Modal, hideModal, profile }) => {
    return (
        <div>
            <ModalStudy
                Modal={Modal}
                hideModal={hideModal}
                profile={profile}
            />
        </div>
    )
};

ModalStudyContainer.propTypes = propTypes;
ModalStudyContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        profile: pathToJS(state.firebase, "profile")
    }),
    { hideModal }
)(ModalStudyContainer);
