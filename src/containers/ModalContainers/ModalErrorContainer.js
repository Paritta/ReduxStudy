import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import ModalError from "../../components/Modal/ModalError/ModalError";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    hideModal: PropTypes.func,
    Modal: PropTypes.object,
};

const defaultTypes = {
    hideModal() {},
    Modal: {},
};

const ModalErrorContainer = ({ hideModal, Modal }) => {
    return (
        <div>
            <ModalError
                hideModal={hideModal}
                Modal={Modal}
            />
        </div>
    )
};

ModalErrorContainer.propTypes = propTypes;
ModalErrorContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Modal: getModal(state),
    }),
    { hideModal }
)(ModalErrorContainer);
