import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import oc from "open-color";
import ModalRegisterForm from "./ModalRegisterForm";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";

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

class ModalRegister extends React.Component {
    submit = values => {
        console.log(values);
        this.props.firebase.push("Posts", { post: values });
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
                            <ModalRegisterForm
                                onSubmit={this.submit}
                                hideModal={hideModal}/>
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