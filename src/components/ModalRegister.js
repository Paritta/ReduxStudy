import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    z-index: 10;
    
    width: 400px;
`

const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
`

const Dimmed = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    
    z-index: 5;
    
    background: rgba(0, 0, 0, 0.3);
`

const ModalRegister = () => {
    return (
        <div>
            ModalRegister
            <Dimmed />
            <Wrapper>
                <ModalBox>
                    <div>Modal Header</div>
                    <div>Body</div>
                    <div>Footer</div>
                </ModalBox>
            </Wrapper>
        </div>
    )
};

export default ModalRegister;