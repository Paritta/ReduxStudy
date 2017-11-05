import React from "react";
import Layout from "../components/box/Layout";
import { connect } from "react-redux";
import { showModal, hideModal } from "../modules/Modal";
import PropTypes from "prop-types";

const propTypes = {
    Modal: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
};

const defaultTypes = {
    showModal() {},
    hideModal() {},
};

function LayoutContainer({ showModal, hideModal }) {
    return (
        <div>
            <Layout
                showModal={showModal}
                hideModal={hideModal}/>
        </div>
    )
}

LayoutContainer.propTypes = propTypes;
LayoutContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Modal: state.Modal }) ,
    { showModal, hideModal }
)(LayoutContainer);
