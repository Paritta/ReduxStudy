import React from "react";
import styled, {keyframes} from "styled-components";
import { bounceInLeft, bounceOutRight } from 'react-animations';
import ModalRegisterForm from "./ModalRegisterForm";
import PropTypes from "prop-types";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    AnimateTurn: PropTypes.func,
    AnimateDown: PropTypes.func,
    firebase: PropTypes.object
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    AnimateTurn() {},
    AnimateDown() {}
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
    
    width: 700px;
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

export class ModalRegister extends React.Component {
    state = {
        isLoading: false,
        error: "",
    };

    submit = values => {
        const uid = this.props.firebase.auth().currentUser.uid;
        const username = this.props.profile.username;
        const display = username ? username : this.props.profile.displayName;

        const post = {
            values,
            author: uid,
            username: display
        };

        console.log(values);
        this.setState({ isLoading: true });
        this.props.firebase
            .push("posts", post)
            .then(()=> {
                this.setState({ isLoading: false });
                this.props.hideModal();
            })
            .catch((error) => {
                this.setState({ isLoading: false, error: error });
            });
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
                            <ModalHeader>스터디 등록</ModalHeader>
                            <ModalBox>
                                {!this.state.isLoading
                                    ?
                                    <ModalRegisterForm
                                        onSubmit={this.submit}
                                        hideModal={hideModal}
                                        animateTurn={animateTurn}
                                        animateDown={animateDown}
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

ModalRegister.propTypes = propTypes;
ModalRegister.defaultTypes = defaultTypes;

const WrappedModalRegister = firebaseConnect()(ModalRegister);

export default connect(
    ({ firebase }) => ({
        profile: pathToJS(firebase, "profile")
    })
)(WrappedModalRegister);