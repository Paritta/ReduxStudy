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
`;

export class Layout extends React.Component {
    componentDidMount () {
        this.props.fetchRequest()
    }

    render () {
        const { Fetch, showModal } = this.props;
        const Pending = Fetch.pending;

        return (
            <div onClick={() => { showModal({modalType: "MODAL_STUDY" }) }}>
                <Wrapper>
                    {
                        Pending?
                        <WrappedReactLoading>
                            <ReactLoading type="cylon" color="palevioletred"/>
                        </WrappedReactLoading>
                        :
                        Fetch.data.map((item, key) =>
                            <Item
                                key={key}
                            >
                                <Card
                                    onClick={() => { showModal({modalType: "MODAL_STUDY"}) }}
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