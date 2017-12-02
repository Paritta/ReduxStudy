import React from "react";
import oc from "open-color";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import PropTypes from "prop-types";

const propTypes = {
    Modal: PropTypes.object,
};

const defaultTypes = {
    Modal: {},
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

const ModalComment = styled.div`
    font-family: 'Hanna', fantasy;
    font-weight: 100;
    font-size: 2em;
    
    margin-top: 150px;
    margin-bottom: 150px;
    
    color: ${oc.gray[4]};
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
    handleError () {
        switch (this.props.Modal.modalProps) {
            case "auth/weak-password":
                return "비밀번호를 6자리 이상 입력해주세요."
            case "auth/email-already-in-use":
                return "이미 등록 이메일입니다.";
            case "auth/wrong-password":
                return "잘못된 비밀번호입니다.";
            case "auth/user-not-found":
                return "잘못된 이메일입니다";
            case "auth/invalid-email":
                return "잘못된 이메일입니다";
        }
    }

    render () {
        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalHeader>에러</ModalHeader>
                        <ModalBox>
                            <ModalComment>{this.handleError()}</ModalComment>
                            <Button onClick={() => this.props.hideModal()}>나가기</Button>
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
