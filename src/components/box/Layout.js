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

const Layout = () => {
    return (
        <div>
            Layout
            <Container>
                <Item>
                    <Card />
                </Item>
                <Item>
                    <Card />
                </Item>
                <Item>
                    <Card />
                </Item>
            </Container>
        </div>
    );
};

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;