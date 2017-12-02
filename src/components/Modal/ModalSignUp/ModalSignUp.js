import React from "react";
import styled, {keyframes} from "styled-components";
import { bounceInLeft, bounceOutRight } from 'react-animations';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalSignUpForm from "./ModalSignUpForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";

const propTypes = {
    Modal: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    AnimateTurn: PropTypes.func,
    AnimateDown: PropTypes.func,
    firebase: PropTypes.object,
    fetchRequest: PropTypes.func,
    toppopuReceiveRequest: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    showModal() {},
    hideModal() {},
    Animate: {},
    AnimateTurn() {},
    AnimateDown() {},
    fetchRequest() {},
    toppopuReceiveRequest() {},
};

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const bounceOutRightAnimation = keyframes`${bounceOutRight}`;

const AnimationWrapper = styled.div`
    animation: 0.5s ${bounceInLeftAnimation};
`;

const AnimationOutWrapper = styled.div`
    animation: 0.5s ${props => props.AnimateOut ? bounceOutRightAnimation : ""};
`;

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

const ModalHeader = styled.div`
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

export class ModalSignUp extends React.Component {
    createNewUser = ({ email, password, username }) => {
        this.props.firebase.createUser(
            { email, password },
            { username, email }
        )
        .then(() => {
            this.props.hideModal();
            this.props.fetchRequest();
            this.props.toppopuReceiveRequest();
        })
        .catch(error => {
            console.log(error.code);
            this.props.showModal({ modalType: "MODAL_ERROR" })
        })
};

    submit = values => {
        this.createNewUser({
            email: values.email,
            password: values.password,
            username: values.Nickname,
        })
    };

    render () {
        const { hideModal, animateTurn, animateDown, Animate } = this.props;

        return (
            <div>
                <Dimmed />
                <AnimationOutWrapper
                    AnimateOut={Animate.AnimateOut}
                >
                    <AnimationWrapper>
                        <Wrapper>
                            <ModalHeader>회원가입</ModalHeader>
                            <ModalBox>
                                <ModalSignUpForm
                                    onSubmit={this.submit}
                                    googleLogin={this.googleLogin}
                                    hideModal={hideModal}
                                    animateTurn={animateTurn}
                                    animateDown={animateDown}
                                />
                            </ModalBox>
                        </Wrapper>
                    </AnimationWrapper>
                </AnimationOutWrapper>
            </div>
        )
    }
}

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
