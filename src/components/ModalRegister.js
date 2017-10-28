import React from "react";
import styled, {keyframes} from "styled-components";
import { zoomIn } from 'react-animations';
import oc from "open-color";
import ModalRegisterForm from "./ModalRegisterForm";

const zoomInAnimation = keyframes`${zoomIn}`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    
    overflow: hidden;
    
    z-index: 10;
    
    width: 400px;
    
    animation: 1s ${zoomInAnimation};
`;

const ModalHeader = styled.div`
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    font-family: 'Hanna', fantasy;
    font-style: normal;
    font-weight: 400;
    color: white;
    padding: 15px 15px;
    background: palevioletred;
`;

const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 15px;
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

const ModalRegister = () => {
    return (
        <div>
            ModalRegister
            <Dimmed />
            <Wrapper>
                <ModalHeader>스터디 등록</ModalHeader>
                <ModalBox>
                    <ModalRegisterForm />
                    <div>Body</div>
                    <div>Footer</div>
                    <Button>등록하기</Button>
                </ModalBox>
            </Wrapper>
        </div>
    )
};

export default ModalRegister;