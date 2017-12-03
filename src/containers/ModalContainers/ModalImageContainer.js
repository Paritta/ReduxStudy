import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import { animateTurn, animateDown } from "../../modules/Feature/Animate";
import { imageSendRequest } from "../../modules/Image/ImageSend";
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
    uploadedFiles: PropTypes.object,
    imageSendRequest: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    animateTurn() {},
    firebase: {},
    uploadedFiles: {},
    imageSendRequest() {},
};

const filesPath = "/posts";

const ModalImageContainer = ({ hideModal, animateTurn, animateDown, Animate, firebase, uploadedFiles, Modal, imageSendRequest }) => {
    return (
        <div>
            <ModalImage
                hideModal={hideModal}
                animateTurn={animateTurn}
                animateDown={animateDown}
                Animate={Animate}
                firebase={firebase}
                uploadedFiles={uploadedFiles}
                Modal={Modal}
                imageSendRequest={imageSendRequest}
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
    connect (
        state => ({
            Modal: getModal(state),
            Animate: getAniamte(state),
            uploadedFiles: dataToJS(state.firebase, filesPath)
        }),
        { hideModal, animateTurn, animateDown, imageSendRequest }
    )
)(ModalImageContainer)
