import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropTypes from "prop-types";

const propTypes = {
    showModal: PropTypes.func,
};

const defaultTypes = {
    showModal () {},
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding: 100px;
`;

const Item = styled.div`
`;

class Layout extends React.Component {
    componentDidMount () {
        this.props.fetchRequest()
    }

    render () {
        const { showModal } = this.props;

        return (
            <div onClick={() => { showModal({modalType: "MODAL_STUDY" }) }}>
                Layout
                <Wrapper>
                    <Item>
                        <Card onClick={() => { showModal({modalType: "MODAL_STUDY"}) }}/>
                    </Item>
                </Wrapper>
            </div>
        );
    }
};

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;