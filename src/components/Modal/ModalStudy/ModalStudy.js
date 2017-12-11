import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import PropTypes from "prop-types";
import ModalStudyCommentContainer from "../../../containers/Modalcontainers/ModalStudyCommentContainer";
import ModalBoxLeftPage from "../ModalBoxLeftPage/ModalBoxLeftPage";
import EmptyImage from "../../../asset/EmptyImage.png";
import oc from "open-color";
import ReactLoading from "react-loading";

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
    postDeleteRequest: PropTypes.func,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
    heartSendRequest: PropTypes.func,
    heartDeleteRequest: PropTypes.func,
};

const defaultTypes = {
    Modal: {},
    auth: {},
    showModal() {},
    postDeleteRequest() {},
    imageReceiveRequest() {},
    ImageReceive: {},
    heartSendRequest() {},
    heartDeleteRequest() {},
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
    
    background: url(${props => props.ImageUrl ? props.ImageUrl : EmptyImage}) center center;
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

const WrappedReactLoading = styled.div`
    transform: scale(2);
    position: absolute;
    
    top: 15%;
    left: 40%;
    
    padding: 80px 0;
`;

export class ModalStudy extends React.Component {
    componentDidMount () {
        this.props.imageReceiveRequest(this.props.Modal.modalProps.postId)
    }

    render () {
        const { Modal, showModal, auth, postDeleteRequest, ImageReceive, heartSendRequest, heartDeleteRequest }  = this.props;
        const modalProps = Modal.modalProps;
        const author = modalProps.data.author;
        const Pending = ImageReceive.pending;
        let ImageUrl = false;
        const HeartCount = modalProps.data.HeartCount;

        if(ImageReceive.data !== undefined && ImageReceive.data.length > 0) {
            ImageUrl = ImageReceive.data[ImageReceive.data.length-1].Url;
        }

        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalBoxLeft>
                            {/* 이미지 로딩 */}
                            {
                                Pending &&
                                <WrappedReactLoading>
                                    <ReactLoading type="cylon" color="palevioletred"/>
                                </WrappedReactLoading>
                            }

                            {/* 이미지가 없을 때는 EmptyImage  */}
                            {
                                auth !== null && modalProps.data.PostImageKey === "" &&
                                <ModalBoxLeftHeader
                                    ImageUrl={false}
                                >
                                    {
                                        auth.uid === author &&
                                        <ImageRegister
                                            onClick={() => showModal({
                                                modalType: "MODAL_IMAGE",
                                                modalProps: modalProps.postId
                                            })}
                                        >
                                            사진 등록
                                        </ImageRegister>
                                    }
                                </ModalBoxLeftHeader>
                            }

                            {/* 이미지가 있을 때는 ImageUrl, 이미지 등록 버튼 삭제 */}
                            {
                                modalProps.data.PostImageKey !== "" &&
                                <ModalBoxLeftHeader
                                    ImageUrl={ImageUrl}
                                >
                                </ModalBoxLeftHeader>
                            }
                            <ModalBoxLeftPage
                                PageData={modalProps}
                                auth={auth}
                                postDeleteRequest={postDeleteRequest}
                                heartSendRequest={heartSendRequest}
                                heartDeleteRequest={heartDeleteRequest}
                                postId={modalProps.postId}
                            />
                        </ModalBoxLeft>
                        <ModalBoxRight>
                            <ModalStudyCommentContainer
                                postId={modalProps.postId}
                                username={modalProps.data.username}
                                auth={auth}
                                author={author}
                                HeartCount={HeartCount}
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
