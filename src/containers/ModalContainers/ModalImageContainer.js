import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import { animateTurn, animateDown } from "../../modules/Animate";
import ModalImage from "../../components/Modal/ModalImage/ModalImage";
import PropTypes from "prop-types";
import { getModal, getAniamte } from "../../selector";
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { compose } from "redux";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    animateTurn: PropTypes.func,
    animateDown: PropTypes.func,
    firebase: PropTypes.object,
    uploadFiles: PropTypes.object,
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    animateTurn() {},
    firebase: {},
    uploadFiles: {},
};

const filesPath = "/posts";

const ModalImageContainer = ({ hideModal, animateTurn, animateDown, Animate, firebase, uploadFiles }) => {
    return (
        <div>
            <ModalImage
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
                firebase={firebase}
                uploadFiles={uploadFiles}
            />
        </div>
    )
};

ModalImageContainer.propTypes = propTypes;
ModalImageContainer.defaultTypes = defaultTypes;

export default compose(
    firebaseConnect([
        filesPath
    ]),
    connect(
        state => ({
            Modal: getModal(state),
            Animate: getAniamte(state),
            uploadFiles: dataToJS(state.firebase, filesPath)
        }),
        { hideModal, animateTurn, animateDown }
    )
)(ModalImageContainer)
