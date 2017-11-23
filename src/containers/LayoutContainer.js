import React from "react";
import Layout from "../components/box/Layout";
import { connect } from "react-redux";
import { showModal, hideModal } from "../modules/Modal";
import { fetchRequest } from "../modules/Fetch";
import PropTypes from "prop-types";
import { getFetch, getFilter } from "../selector";

const propTypes = {
    Fetch: PropTypes.object,
    Filter: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    fetchRequest: PropTypes.func
};

const defaultTypes = {
    Fetch: {},
    Filter: {},
    showModal() {},
    hideModal() {},
    fetchRequest() {}
};

function LayoutContainer({ Fetch, Filter, showModal, hideModal, fetchRequest }) {
    return (
        <div>
            <Layout
                Fetch={Fetch}
                Filter={Filter}
                showModal={showModal}
                hideModal={hideModal}
                fetchRequest={fetchRequest}
            />
        </div>
    )
}

LayoutContainer.propTypes = propTypes;
LayoutContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({
        Fetch: getFetch(state),
        Filter: getFilter(state)
    }),
    { showModal, hideModal, fetchRequest }
)(LayoutContainer);
