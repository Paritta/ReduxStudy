import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalSignUpForm from "./ModalSignUpForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
    })
};

const defaultTypes = {
    hideModal() {},
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

class ModalSignUp extends React.Component {
    createNewUser = ({ email, password, username }) => {
        this.props.firebase.createUser(
            { email, password },
            { username, email }
        )
    };

    submit = values => {
        this.createNewUser({
            email: values.email,
            password: values.password,
            username: values.Nickname
        })
    };

    render () {
        const { hideModal } = this.props;

        return (
            <div>
                <Dimmed />
                    <Wrapper>
                        <AnimationWrapper>
                        <ModalHeader>회원가입</ModalHeader>
                        <ModalBox>
                            <ModalSignUpForm
                                onSubmit={this.submit}
                                hideModal={hideModal}
                            />
                        </ModalBox>
                        </AnimationWrapper>
                    </Wrapper>
            </div>
        )
    }
};

ModalSignUp.propTypes = propTypes;
ModalSignUp.defaultTypes = defaultTypes;

const WrappedModalSignUp = firebaseConnect()(ModalSignUp);

export default connect(
    ({ firebase }) => ({
        authError: pathToJS(firebase, "authError"),
        auth: pathToJS(firebase, "auth"),
        profile: pathToJS(firebase, "profile")
    })
)(WrappedModalSignUp)
