import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropTypes from "prop-types";

const propTypes = {
    showModal: PropTypes.func.isRequired,
    fetchRequest: PropTypes.func.isRequired
};

const defaultTypes = {
    showModal () {},
    fetchRequest () {}
};

const Container = styled.div`
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
        const { showModal, fetchRequest } = this.props;

        return (
            <div onClick={() => { showModal({modalType: "MODAL_STUDY" }) }}>
                Layout
                <Container>
                    <Item>
                        <Card onClick={() => { showModal({modalType: "MODAL_STUDY"}) }}/>
                    </Item>
                </Container>
            </div>
        );
    }
};

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;