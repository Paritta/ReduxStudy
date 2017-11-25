import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../modules/Modal/Modal";
import PropTypes from "prop-types";
import { getModal } from "../../selector";

const propTypes = {
    Modal: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
};

const defaultTypes = {
    showModal() {},
    hideModal() {},
};

function HeaderContainer({ showModal, hideModal }) {
    return (
        <div>
            <Header
                onShowModal={showModal}
                onHideModal={hideModal}
            />
        </div>
    )
}

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: getModal(state) }) ,
    { showModal, hideModal }
)(HeaderContainer);
