import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import oc from "open-color";
import FaGoogle from "react-icons/lib/fa/google";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaTwitter from "react-icons/lib/fa/twitter";
import PropTypes from "prop-types";

const propTypes = {
    handleSubmit: PropTypes.func,
    hideModal: PropTypes.func,
    googleLogin: PropTypes.func,
};

const defaultTypes = {
    handleSubmit() {},
    hideModal() {},
    googleLogin() {},
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

const SocialLoginButton = styled.button`
    color: white;
    
    font-size: 1em;
    margin: 5px 0;
    padding: 0.5em 12em 0.5em 1em;
    
    transition: all 0.3s ease;
`;

const GoogleSocialLoginButton = SocialLoginButton.extend`
    background: red;
    border: 2px solid red;
    
    &:hover {
        background: ${oc.red[4]};
        border: 2px solid ${oc.red[4]};
    }
`;

const SocialLoginButtonWrapper = styled.div`
    padding: 10px 60px ;
    margin: 0;
`;

const Span = styled.span`
    padding: 0;
    margin: 0 0 0 15px;
`;


const FacebookSocialLoginButton = SocialLoginButton.extend`
    background: royalblue;
    border: 2px solid royalblue;
    padding: 0.5em 11.3em 0.5em 0.5em;
    
    &:hover {
        background: ${oc.blue[4]};
        border: 2px solid ${oc.blue[4]};
    }
`;

const TwitterSocialLoginButton = SocialLoginButton.extend`
    background: skyblue;
    border: 2px solid skyblue;
    
    &:hover {
        background: ${oc.blue[2]};
        border: 2px solid ${oc.blue[2]};
    }
`;

export let ModalSignInForm = ({ handleSubmit, hideModal, googleLogin }) => {
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
            <SocialLoginButtonWrapper>
                <GoogleSocialLoginButton
                    onClick={() => googleLogin()}
                >
                    <FaGoogle />
                    <Span>Sign in with Google</Span>
                </GoogleSocialLoginButton>
                <FacebookSocialLoginButton>
                    <FaFacebook />
                    <Span>Sign in with Facebook</Span>
                </FacebookSocialLoginButton>
                <TwitterSocialLoginButton>
                    <FaTwitter />
                    <Span>Sign in with Twitter</Span>
                </TwitterSocialLoginButton>
            </SocialLoginButtonWrapper>
        </Wrapper>
    )
};

ModalSignInForm.propTypes = propTypes;
ModalSignInForm.defaultTypes = defaultTypes;

ModalSignInForm = reduxForm({
    form: "ModalSignIn"
})(ModalSignInForm);

export default ModalSignInForm;