import React from "react";
import styled, {keyframes} from "styled-components";
import { bounceInLeft, bounceOutRight } from 'react-animations';
import PropTypes from "prop-types";
import Dropzone from 'react-dropzone';
import oc from "open-color";
import ReactLoading from "react-loading";

const propTypes = {
    Modal: PropTypes.object,
    hideModal: PropTypes.func,
    Animate: PropTypes.object,
    AnimateTurn: PropTypes.func,
    AnimateDown: PropTypes.func,
    firebase: PropTypes.object,
};

const defaultTypes = {
    Modal: {},
    hideModal() {},
    Animate: {},
    AnimateTurn() {},
    AnimateDown() {},
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

const Span = styled.div`
    font-family: 'Hanna', fantasy;
    font-size: 1.5em;
`;

const DropWrapper= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 50px;
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


export class ModalImage extends React.Component {
    state = {
        isLoading: false,
        error: "",
    };

    onFilesDrop = (files) => {
        // 해당 포스트 경로에 사진을 저장한다
        const filesPath = `/posts/${this.props.Modal.modalProps}`;
        // this.props.filePathStorage(this.props.Modal.modalProps);

        // Uploads files and push's objects containing metadata to database at dbPath
        // uploadFiles(storagePath, files, dbPath)
        this.props.firebase.uploadFiles(filesPath, files, filesPath)
            .then(data => {
                // const Url = data[0].File.downloadURL;
                // const Path = data[0].File.fullPath;
                //
                // console.log(Url);
                // console.log(Path);
                //
                // // 쓰기 쉽게 배열로 ...
                // const UrlArr = [];
                // UrlArr.push(Url);
                // const PathArr = [];
                // PathArr.push(Path);
                //
                // this.props.firebase
                //     .push(`posts/${this.props.Modal.modalProps}/ImageUrl`, UrlArr);
                // this.props.firebase
                //     .push(`posts/${this.props.Modal.modalProps}/ImagePath`, PathArr);
            });


        this.props.hideModal();
    };

    render () {
        const { hideModal, Animate } = this.props;
        console.log(this.props);

        return (
            <div>
                <Dimmed />
                <AnimationOutWrapper
                    AnimateOut={Animate.AnimateOut}
                >
                    <AnimationWrapper>
                        <Wrapper>
                            <ModalHeader>이미지 등록</ModalHeader>
                            <ModalBox>
                                {!this.state.isLoading
                                    ?
                                    <DropWrapper>
                                        <Dropzone onDrop={this.onFilesDrop}>
                                            <Span>
                                                이미지를 떨구십시오.
                                            </Span>
                                        </Dropzone>
                                    </DropWrapper>
                                    :
                                    <WrappedReactLoading>
                                        <ReactLoading type="cylon" color="palevioletred"/>
                                    </WrappedReactLoading>
                                }
                                <Button onClick={() => hideModal()}>나가기</Button>
                            </ModalBox>
                        </Wrapper>
                    </AnimationWrapper>
                </AnimationOutWrapper>
            </div>
        )
    }
}

ModalImage.propTypes = propTypes;
ModalImage.defaultTypes = defaultTypes;

export default ModalImage;
