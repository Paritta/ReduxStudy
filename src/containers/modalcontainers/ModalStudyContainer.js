import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal";
import ModalStudy from "../../components/Modal/ModalStudy/ModalStudy";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalStudyContainer = ({ Modal, hideModal }) => {
    return (
        <div>
            <ModalStudy
                Modal={Modal}
                hideModal={hideModal}
            />
        </div>
    )
};

ModalStudyContainer.propTypes = propTypes;
ModalStudyContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: getModal(state) }),
    { hideModal }
)(ModalStudyContainer);
