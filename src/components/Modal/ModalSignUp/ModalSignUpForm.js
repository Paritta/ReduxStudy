import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import oc from "open-color";
import PropTypes from "prop-types";

const propTypes = {
    handleSubmit: PropTypes.func,
    hideModal: PropTypes.func,
};

const defaultTypes = {
    handleSubmit() {},
    hideModal() {},
};

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

export let ModalSignUpForm = ({ handleSubmit, hideModal }) => {
    return (
        <Wrapper>
            <form onSubmit={ handleSubmit }>
                <div>
                    <StyledField name="email" component="input" type="text" required placeholder="email"/>
                </div>
                <div>
                    <StyledField name="Nickname" component="input" type="text" required placeholder="Nickname"/>
                </div>
                <div>
                    <StyledField name="password" component="input" type="password" required placeholder="password"/>
                </div>
                <Button type="submit">회원 가입</Button>
                <Button onClick={() => hideModal()}>나가기</Button>
            </form>
        </Wrapper>
    )
};

ModalSignUpForm.propTypes = propTypes;
ModalSignUpForm.defaultTypes = defaultTypes;

ModalSignUpForm = reduxForm({
    form: 'ModalSignUp'
})(ModalSignUpForm);

export default ModalSignUpForm;