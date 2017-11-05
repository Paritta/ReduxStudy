import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import ModalRegisterForm from "./ModalRegisterForm";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
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

const AnimationWrapper = styled.div`
    animation: 1s ${fadeInAnimation};
`;

const WrappedReactLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(2);
    padding: 80px 0;
`;

class ModalRegister extends React.Component {
    state = {
        isLoading: false,
        error: ""
    };

    submit = values => {
        console.log(values);
        this.setState({ isLoading: true });
        this.props.firebase
            .push("Posts", { post: values })
            .then(()=> {
                this.setState({ isLoading: false });
            })
            .catch((error) => {
                this.setState({ isLoading: false, error: error });
            })
    };

    render () {
        const { hideModal } = this.props;

        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalHeader>스터디 등록</ModalHeader>
                        <ModalBox>
                            {!this.state.isLoading
                            ?
                            <ModalRegisterForm
                                onSubmit={this.submit}
                                hideModal={hideModal}/>
                            :
                            <WrappedReactLoading>
                                <ReactLoading type="cylon" color="palevioletred"/>
                            </WrappedReactLoading>
                            }
                        </ModalBox>
                    </AnimationWrapper>
                </Wrapper>
            </div>
        )
    }
};

ModalRegister.propTypes = propTypes;
ModalRegister.defaultTypes = defaultTypes;

const WrappedModalRegister = firebaseConnect()(ModalRegister);

export default connect(
    ({ firebase }) => ({})
)(WrappedModalRegister);