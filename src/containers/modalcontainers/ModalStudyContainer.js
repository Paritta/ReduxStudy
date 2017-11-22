import React from "react";
import { pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import { postDeleteRequest } from "../../modules/PostDelete";
import ModalStudy from "../../components/Modal/ModalStudy/ModalStudy";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    hideModal: PropTypes.func,
    postDeleteRequest: PropTypes.func,
    auth: PropTypes.object
};

const defaultTypes = {
    hideModal() {},
    postDeleteRequest() {},
    auth: {}
};

const ModalStudyContainer = ({ Modal, hideModal, auth, postDeleteRequest }) => {
    return (
        <div>
            <ModalStudy
                Modal={Modal}
                hideModal={hideModal}
                auth={auth}
                postDeleteRequest={postDeleteRequest}
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
    { hideModal, postDeleteRequest }
)(ModalStudyContainer);
