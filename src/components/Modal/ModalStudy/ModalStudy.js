import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import PropTypes from "prop-types";
import ModalStudyAsset from "../../../asset/ModalStudyAsset.jpeg";
import ModalStudyCommentContainer from "../../../containers/ModalContainers/ModalStudyCommentContainer";
import ModalBoxLeftPage from "../ModalBoxLeftPage/ModalBoxLeftPage";
import oc from "open-color";

const propTypes = {
    Modal: PropTypes.shape({
        modalProps: PropTypes.shape({
            postId: PropTypes.string.isRequired,
            data: PropTypes.shape({
                username: PropTypes.string
            })
        })
    }),
    auth: PropTypes.object,
    showModal: PropTypes.func,
    postDeleteRequest: PropTypes.func
};

const defaultTypes = {
    Modal: {},
    auth: {},
    showModal() {},
    postDeleteRequest() {}
};

const fadeInAnimation = keyframes`${fadeIn}`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    overflow: hidden;
    
    z-index: 10;
    
    width: 70%;
`;

const AnimationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    animation: 1s ${fadeInAnimation};
`;

const ModalBoxLeft = styled.div`
    position: relative;

    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    
    width: 58%;
    height: 800px;
`;

const ModalBoxLeftHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    
    background: url(${ModalStudyAsset}) left center;
    background-size: cover;
    
    width: 100%;
    height: 60%;
`;

const ModalBoxRight = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
    
    width: 35%;
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

const ImageRegister = styled.button`
    position: absolute;
    
    top: 3%;
    right: 3%;
    
    font-weight: 400;
    font-size: 1.2em;
    
    padding: 0.25em 1em;
    
    background: palevioletred;
    color: white;
    
    border: 2px solid palevioletred;
    
    transition: all 1s ease;
    
    &:hover {
        background: ${oc.pink[4]};
    border: 2px solid ${oc.pink[4]};
    }
`;

export class ModalStudy extends React.Component {
    render () {
        const { Modal, showModal, auth, postDeleteRequest }  = this.props;
        const Props = Modal.modalProps;
        const author = Props.data.author;

        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalBoxLeft>
                            <ModalBoxLeftHeader>
                                {
                                    auth !== null && auth.uid === author &&
                                    <ImageRegister
                                        onClick={() => showModal({
                                            modalType: "MODAL_IMAGE",
                                            modalProps: Props.postId
                                        })}
                                    >
                                        사진 등록
                                    </ImageRegister>
                                }
                            </ModalBoxLeftHeader>
                            <ModalBoxLeftPage
                                PageData={Props}
                                auth={auth}
                                postDeleteRequest={postDeleteRequest}
                            />
                        </ModalBoxLeft>
                        <ModalBoxRight>
                            <ModalStudyCommentContainer
                                postId={Props.postId}
                                username={Props.data.username}
                            />
                        </ModalBoxRight>
                    </AnimationWrapper>
                </Wrapper>
            </div>
        )
    }
}

ModalStudy.propTypes = propTypes;
ModalStudy.defaultTypes = defaultTypes;

export default ModalStudy
