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
