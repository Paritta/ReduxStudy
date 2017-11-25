import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

const propTypes = {
    Fetch: PropTypes.object,
    Filter: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    fetchRequest: PropTypes.func,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
};

const defaultTypes = {
    Fetch: {},
    Filter: {},
    showModal() {},
    hideModal() {},
    fetchRequest() {},
    imageReceiveRequest() {},
    ImageReceive: {},
};

const Wrapper = styled.div`
    position: relative;
    
    width: 100%;
    height: 100vh;
    
    padding: 0 40px;
    text-align: left;
`;

const WrappedReactLoading = styled.div`
    transform: scale(2);
    position: absolute;
    
    top: 50%;
    left: 50%;
    
    padding: 80px 0;
`;

const Item = styled.div`
    display: inline-block;
    width: 33.3%;
    margin-bottom: 20px;
    margin-top: 60px;
`;

export class Layout extends React.Component {
    componentDidMount () {
        this.props.fetchRequest();
    }

    render () {
        const { Fetch, showModal, imageReceiveRequest, ImageReceive } = this.props;
        const Pending = Fetch.pending;

        return (
            <div>
                <Wrapper>
                    {
                        Pending?
                        <WrappedReactLoading>
                            <ReactLoading type="cylon" color="palevioletred"/>
                        </WrappedReactLoading>
                        :
                        Fetch.data.map((item, key) =>
                            <Item
                                onClick={() =>
                                    { showModal({
                                        modalType: "MODAL_STUDY",
                                        modalProps: item
                                    })}}
                                key={key}
                            >
                                <Card
                                    item={item}
                                    postId={item.postId}
                                    imageReceiveRequest={imageReceiveRequest}
                                    ImageReceive={ImageReceive}
                                />
                            </Item>
                        )
                    }
                </Wrapper>
            </div>
        );
    }
}

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;
