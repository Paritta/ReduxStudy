import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    background: ${oc.gray[2]};
    
    height: 50vh;
`;

const Item = styled.div`
    width: 300px;
    min-width: 200px;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Item>
                <div>
                    Github:
                </div>
                <div>
                    Email
                </div>
                <div>
                    P.h
                </div>
            </Item>
            <Item>
                <div>
                    P.h
                </div>
            </Item>
        </Wrapper>
    )
};

Footer.propTypes = propTypes;
Footer.defaultTypes = defaultTypes;

export default Footer;
