import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../../modules/Modal/Modal";
import PropTypes from "prop-types";

const propTypes = {
    hideModal: PropTypes.func,
};

const defaultTypes = {
    hideModal() {},
};

const ModalErrorContainer = ({ hideModal }) => {
    return (
        <div>
            <ModalError
                hideModal={hideModal}
            />
        </div>
    )
};

ModalErrorContainer.propTypes = propTypes;
ModalErrorContainer.defaultTypes = defaultTypes;

export default connect(
    null,
    { hideModal }
)(ModalErrorContainer);
