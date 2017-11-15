import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { showModal, hideModal } from "../modules/Modal";
import PropTypes from "prop-types";
import { getModal } from "../selector";

const propTypes = {
    Modal: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
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
