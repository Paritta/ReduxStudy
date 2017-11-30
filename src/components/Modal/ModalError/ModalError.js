import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';

const propTypes = {
};

const defaultTypes = {
};

const fadeInAnimation = keyframes`${fadeIn}`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    overflow: hidden;
    
    z-index: 10;
    
    width: 70%;
`;

const AnimationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    animation: 1s ${fadeInAnimation};
`;

const Dimmed = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    
    z-index: 5;
    
    background: rgba(0, 0, 0, 0.3);
`;

export class ModalError extends React.Component {
    render () {
        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                    </AnimationWrapper>
                </Wrapper>
            </div>
        )
    }
}

ModalError.propTypes = propTypes;
ModalError.defaultTypes = defaultTypes;

export default ModalError
