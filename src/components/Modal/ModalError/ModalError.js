import React from "react";
import oc from "open-color";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import MdClose from "react-icons/lib/md/close";

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
    
    border-radius: 10px;
    
    overflow: hidden;
    
    z-index: 10;
    
    width: 550px;
`;

const AnimationWrapper = styled.div`
    animation: 1s ${fadeInAnimation};
    width: 100%;
    
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

const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    
    width: 100%;
    height: 400px;
    
    display: block;
`;

const CloseWrapper = styled.div`
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 5px solid red;
    border-radius: 100%;
    
    height: 40%;
    width: 40%;
`;

const ModalComment = styled.div`
    font-family: 'Hanna', fantasy;
    font-weight: 100;
    font-size: 1.5em;
    
    color: red;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
`;

const ModalHeader = styled.div`
    font-style: normal;
    font-weight: 400;
    color: white;
    padding: 15px 15px;
    background: palevioletred;
`;

export class ModalError extends React.Component {
    render () {
        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalHeader>에러</ModalHeader>
                        <ModalBox>
                            <ModalComment>Mesdage</ModalComment>
                            <Button onClick={() => this.hideAnimate()}>나가기</Button>
                        </ModalBox>
                    </AnimationWrapper>
                </Wrapper>
            </div>
        )
    }
}

ModalError.propTypes = propTypes;
ModalError.defaultTypes = defaultTypes;

export default ModalError
