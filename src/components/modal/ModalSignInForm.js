import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import oc from "open-color";

const Wrapper = styled.div`
    padding: 30px 0 10px 0;
`;

const StyledField = styled(Field)`
    background-color: ${oc.gray[0]};
    width: 400px;
    height: 40px;
    font-size: 15px;
    border: 2px solid white;
    padding-left: 20px;
    margin-bottom: 10px;
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

let ModalSignInForm = ({ handleSubmit, hideModal }) => {
    return (
        <Wrapper>
            <form onSubmit={ handleSubmit }>
                <div>
                    <StyledField name="email" component="input" type="text" required placeholder="email"/>
                </div>
                <div>
                    <StyledField name="password" component="input" type="password" required placeholder="password"/>
                </div>
                <Button type="submit">로그인</Button>
                <Button onClick={() => hideModal()}>나가기</Button>
            </form>
        </Wrapper>
    )
};

ModalSignInForm = reduxForm({
    form: "ModalSignIn"
})(ModalSignInForm);

export default ModalSignInForm;