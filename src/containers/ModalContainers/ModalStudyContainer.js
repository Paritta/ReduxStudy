import React from "react";
import { pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../modules/Modal";
import { postDeleteRequest } from "../../modules/PostDelete";
import { imageReceiveRequest } from "../../modules/ImageReceive";
import ModalStudy from "../../components/Modal/ModalStudy/ModalStudy";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    postDeleteRequest: PropTypes.func,
    auth: PropTypes.object,
    imageReceiveRequest: PropTypes.func,

};

const defaultTypes = {
    showModal() {},
    hideModal() {},
    postDeleteRequest() {},
    auth: {},
    imageReceiveRequest() {},
};

const ModalStudyContainer = ({ Modal, showModal, hideModal, auth, postDeleteRequest, imageReceiveRequest }) => {
    return (
        <div>
            <ModalStudy
                Modal={Modal}
                showModal={showModal}
                hideModal={hideModal}
                auth={auth}
                postDeleteRequest={postDeleteRequest}
                imageReceiveRequest={imageReceiveRequest}
            />
        </div>
    )
};

ModalStudyContainer.propTypes = propTypes;
ModalStudyContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
        auth: pathToJS(state.firebase, "auth")
    }),
    { showModal, hideModal, postDeleteRequest, imageReceiveRequest }
)(ModalStudyContainer);
