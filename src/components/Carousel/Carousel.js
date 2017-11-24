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
    align-items: center;
    justify-content: center;
`;

const Span= styled.div`
    color: ${oc.gray[5]};
    font-family: 'Hanna', fantasy;
    font-size: 5em;
`;

export class Carousel extends React.Component {
    render () {

        return (
            <Wrapper>
                <Span>
                    슬라이드 준비 중 ...
                </Span>
            </Wrapper>
        )
    }
}

Carousel.propTypes = propTypes;
Carousel.defaultTypes = defaultTypes;

export default Carousel;
