import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    background: ${oc.gray[1]};
    height: 90vh;
    
    display: flex;
    flex-direction: column;
`;

const Footer = styled.div`
    background: ${oc.gray[1]};
    height: 10vh;
`;

const Face = styled.div`
    background: white;
    height: 100px;
    
    width: 100px;
    height: 10vh;
`;

const Body = styled.div`
    background: white;
    height: 10vh;
    
    width: 100px;
    height: 10vh;
`;

export const About = () => {
    return (
        <div>
            <Wrapper>
                About
            </Wrapper>
            <Footer>
                친구들
            </Footer>
        </div>
    )
};

About.propTypes = propTypes;
About.defaultTypes = defaultTypes;

export default About;
