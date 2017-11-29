import React from "react";
import { pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../modules/Modal/Modal";
import { postDeleteRequest } from "../../modules/Post/PostDelete";
import { imageReceiveRequest } from "../../modules/Image/ImageReceive";
import { heartSendRequest } from "../../modules/Heart/HeartSend";
import { heartDeleteRequest } from "../../modules/Heart/HeartDelete";
import ModalStudy from "../../components/Modal/ModalStudy/ModalStudy";
import PropTypes from "prop-types";
import { getModal, getImageReceive } from "../../selector";

const propTypes = {
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    postDeleteRequest: PropTypes.func,
    auth: PropTypes.object,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
    heartSendRequest: PropTypes.func,
    heartDeleteRequest: PropTypes.func,
};

const defaultTypes = {
    showModal() {},
    hideModal() {},
    postDeleteRequest() {},
    auth: {},
    imageReceiveRequest() {},
    ImageReceive: {},
    heartSendRequest() {},
    heartDeleteRequest() {},
};

const ModalStudyContainer = ({ Modal, showModal, hideModal, auth, postDeleteRequest, imageReceiveRequest, ImageReceive, heartSendRequest, heartDeleteRequest }) => {
    return (
        <div>
            <ModalStudy
                Modal={Modal}
                showModal={showModal}
                hideModal={hideModal}
                auth={auth}
                postDeleteRequest={postDeleteRequest}
                imageReceiveRequest={imageReceiveRequest}
                ImageReceive={ImageReceive}
                heartSendRequest={heartSendRequest}
                heartDeleteRequest={heartDeleteRequest}
            />
        </div>
    )
};

ModalStudyContainer.propTypes = propTypes;
ModalStudyContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        ImageReceive: getImageReceive(state),
        auth: pathToJS(state.firebase, "auth")
    }),
    { showModal, hideModal, postDeleteRequest, imageReceiveRequest, heartSendRequest, heartDeleteRequest }
)(ModalStudyContainer);
