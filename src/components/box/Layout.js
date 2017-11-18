import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

const propTypes = {
    showModal: PropTypes.func,
};

const defaultTypes = {
    showModal () {},
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding: 100px;
`;

const WrappedReactLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(2);
    padding: 80px 0;
`;

const Item = styled.div`
    display: inline-block;
`;

export class Layout extends React.Component {
    componentDidMount () {
        this.props.fetchRequest()
    }

    componentWillReceiveProps(nextProps) {
    }

    render () {
        const { Fetch, showModal } = this.props;
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
                                />
                            </Item>
                        )
                    }
                </Wrapper>
            </div>
        );
    }
};

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;