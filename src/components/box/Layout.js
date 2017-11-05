import React from "react";
import styled from "styled-components";
import Card from "./Card";

const propTypes = {
};

const defaultTypes = {
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding: 100px;
`;

const Item = styled.div`
`;

const Layout = ({ showModal, hideModal }) => {
    return (
        <div onClick={() => { showModal({modalType: "MODAL_STUDY"}) }}>
            Layout
            <Container>
                <Item>
                    <Card onClick={() => { showModal({modalType: "MODAL_STUDY"}) }}/>
                </Item>
            </Container>
        </div>
    );
};

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;