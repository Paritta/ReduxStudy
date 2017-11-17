import React from "react";
import Layout from "../components/box/Layout";
import { connect } from "react-redux";
import { showModal, hideModal } from "../modules/Modal";
import { fetchRequest } from "../modules/Fetch";
import PropTypes from "prop-types";
import { getFetch } from "../selector";

const propTypes = {
    Fetch: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    fetchRequest: PropTypes.func.isRequired
};

const defaultTypes = {
    showModal() {},
    hideModal() {},
    fetchRequest() {}
};

function LayoutContainer({ Fetch, showModal, hideModal, fetchRequest }) {
    return (
        <div>
            <Layout
                Fetch={Fetch}
                showModal={showModal}
                hideModal={hideModal}
                fetchRequest={fetchRequest}/>
        </div>
    )
}

LayoutContainer.propTypes = propTypes;
LayoutContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Fetch: getFetch(state) }) ,
    { showModal, hideModal, fetchRequest }
)(LayoutContainer);
