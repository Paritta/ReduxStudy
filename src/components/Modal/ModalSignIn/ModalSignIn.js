import React from "react";
import styled, {keyframes} from "styled-components";
import { bounceInLeft, bounceOutRight } from 'react-animations';
import PropTypes from "prop-types";
import ModalSignInForm from "./ModalSignInForm";
import { pathToJS, firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const propTypes = {
    Modal: PropTypes.object,
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

const WrappedReactLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(2);
    padding: 80px 0;
`;

export class ModalSignIn extends React.Component {
    state = {
      isLoading: false,
    };

    submit = values => {
        this.Login(values);
    };

    Login = LoginData => {
        this.setState({ isLoading: true });
        return this.props.firebase
            .login({
                email: LoginData.email,
                password: LoginData.password
            })
            .then(() => {
                this.setState({ isLoading: false });
                this.props.hideModal();
                this.props.fetchRequest();
                this.props.toppopuReceiveRequest();
            })
            .catch((error) => {
                this.setState({ isLoading: false });
                console.log("there was an error:", error);
                console.log("error prop:", this.props.authError);
            })
    };

    // 구글 로그인
    googleLogin = loginData => {
        this.setState({ isLoading: true });
        return this.props.firebase
            .login({ provider: 'google' })
            .then(() => {
                this.setState({ isLoading: false });
                // this is where you can redirect to another route
                this.props.fetchRequest();
                this.props.toppopuReceiveRequest();
            })
            .catch((error) => {
                this.setState({ isLoading: false });
                console.log('there was an error', error);
                console.log('error prop:', this.props.authError) // thanks to connect
            })
    };

    // 페이스북 로그인
    facebookLogin = loginData => {
        this.setState({ isLoading: true });
        return this.props.firebase
            .login({ provider: 'facebook' })
            .then(() => {
                this.setState({ isLoading: false });
                // this is where you can redirect to another route
                this.props.fetchRequest();
                this.props.toppopuReceiveRequest();
            })
            .catch((error) => {
                this.setState({ isLoading: false });
                console.log('there was an error', error);
                console.log('error prop:', this.props.authError) // thanks to connect
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
                                <ModalHeader>로그인</ModalHeader>
                                <ModalBox>
                                {!this.state.isLoading?
                                        <ModalSignInForm
                                            hideModal={hideModal}
                                            animateTurn={animateTurn}
                                            animateDown={animateDown}
                                            googleLogin={this.googleLogin}
                                            facebookLogin={this.facebookLogin}
                                            onSubmit={this.submit}
                                        />
                                    :
                                    <WrappedReactLoading>
                                        <ReactLoading type="cylon" color="palevioletred"/>
                                    </WrappedReactLoading>
                                }
                                </ModalBox>
                        </Wrapper>
                    </AnimationWrapper>
                </AnimationOutWrapper>
            </div>
        )
    }
}

ModalSignIn.propTypes = propTypes;
ModalSignIn.defaultTypes = defaultTypes;

const WrappedModalSignIn = firebaseConnect()(ModalSignIn);

export default connect(
    ({ firebase }) => ({
        authError: pathToJS(firebase, "authError"),
    })
)(WrappedModalSignIn);
