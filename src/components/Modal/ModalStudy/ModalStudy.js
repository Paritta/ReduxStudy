import React from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from 'react-animations';
import PropTypes from "prop-types";
import ModalStudyAsset from "../../../asset/ModalStudyAsset.jpeg";
import ModalStudyCommentContainer from "../../../containers/modalcontainers/ModalStudyCommentContainer";
import ModalBoxLeftPage from "../ModalBoxLeftPage/ModalBoxLeftPage";

const propTypes = {
    Modal: PropTypes.shape({
        modalProps: PropTypes.shape({
            postId: PropTypes.string.isRequired,
            data: PropTypes.shape({
                username: PropTypes.string
            })
        })
    }),
    profile: PropTypes.object
};

const defaultTypes = {
    Modal: {},
    profile: {}
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

export class ModalStudy extends React.Component {
    render () {
        const { Modal, profile }  = this.props;
        const Props = Modal.modalProps;

        return (
            <div>
                <Dimmed />
                <Wrapper>
                    <AnimationWrapper>
                        <ModalBoxLeft>
                            <ModalBoxLeftHeader />
                            <ModalBoxLeftPage
                                PageData={Props}
                                profile={profile}
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
