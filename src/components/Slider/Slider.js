import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    background: white;
    height: 50vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span= styled.div`
    color: ${oc.gray[5]};
    font-family: 'Hanna', fantasy;
    font-size: 5em;
`;

export const Slider = () => {
    return (
        <Wrapper>
            <Span>
               슬라이드 기능 준비 중 ...
            </Span>
        </Wrapper>
    )
};

Slider.propTypes = propTypes;
Slider.defaultTypes = defaultTypes;

export default Slider;
