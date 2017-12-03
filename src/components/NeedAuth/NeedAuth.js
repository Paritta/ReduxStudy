import React from "react";
import styled from "styled-components";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    background: hsla(0, 100%, 0%, 0.4);
    height: 50vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
`;

const Span= styled.div`
    color: white;
    font-family: 'Hanna', fantasy;
    font-size: 3em;
`;

export class NeedAuth extends React.Component {
    render () {

        return (
            <Wrapper>
                <Span>
                    로그인이 필요합니다.
                </Span>
            </Wrapper>
        )
    }
}

NeedAuth.propTypes = propTypes;
NeedAuth.defaultTypes = defaultTypes;

export default NeedAuth;
