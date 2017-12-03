import React from "react";
import Layout from "../../components/Body/Layout";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../modules/Modal/Modal";
import { fetchRequest } from "../../modules/Post/PostFetch";
import { imageReceiveRequest } from "../../modules/Image/ImageReceive";
import PropTypes from "prop-types";
import { getFetch, getFilter, getImageReceive } from "../../selector";
import { pathToJS } from 'react-redux-firebase';
import { compose } from "redux";

const propTypes = {
    Fetch: PropTypes.object,
    Filter: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    fetchRequest: PropTypes.func,
    firebase: PropTypes.object,
    uploadedFiles: PropTypes.object,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
    auth: PropTypes.object,
};

const defaultTypes = {
    Fetch: {},
    Filter: {},
    showModal() {},
    hideModal() {},
    fetchRequest() {},
    firebase: {},
    uploadedFiles: {},
    imageReceiveRequest() {},
    ImageReceive: {},
    auth: {},
};

function LayoutContainer({ Fetch, Filter, showModal, hideModal, fetchRequest, firebase, imageReceiveRequest, ImageReceive, auth }) {
    return (
        <div>
            <Layout
                Fetch={Fetch}
                Filter={Filter}
                showModal={showModal}
                hideModal={hideModal}
                fetchRequest={fetchRequest}
                firebase={firebase}
                imageReceiveRequest={imageReceiveRequest}
                ImageReceive={ImageReceive}
                auth={auth}
            />
        </div>
    )
}

LayoutContainer.propTypes = propTypes;
LayoutContainer.defaultTypes = defaultTypes;

export default compose(
    connect (
        state => ({
            Fetch: getFetch(state),
            Filter: getFilter(state),
            ImageReceive: getImageReceive(state),
            auth: pathToJS(state.firebase, "auth")
        }),
        { showModal, hideModal, fetchRequest, imageReceiveRequest }
    )
)(LayoutContainer);
