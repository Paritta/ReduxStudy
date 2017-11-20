import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { commentMakeArrayRequest } from "../../../modules/CommentMakeArray";
import { commentReceiveRequest } from "../../../modules/CommentReceive";
import { hideModal } from "../../../modules/Modal";
import PropTypes from "prop-types";
import FaUser from "react-icons/lib/fa/user";

const propTypes = {
    commentReceiveRequest: PropTypes.func.isRequired,
    commentMakeArrayRequest: PropTypes.func.isRequired,
    hideModal : PropTypes.func.isRequired
};

const defaultTypes = {
    commentMakeArrayRequest () {},
    commentReceiveRequest () {},
    hideModal () {}
};

const Wrapper = styled.div`
    position: relative;
    
    height: 100%;
    width: 100%;
`;

const ModalStudyCommentListHeader = styled.div`
    position: absolute;
    
    top: 0;
    left: 0;
    
    height: 7%;
    width: 100%;
    
    background: palevioletred;
`;

const ModalStudyCommentListHeaderWrapper = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
`;

const ModalStudyCommentListHeaderIcon = styled.div`
    height: 35px;
    width: 35px;
   
    border-radius: 100%;
    
    background: white;
    
    position: relative;
    top: 10px;
    left: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
    position: absolute;
    
    top: 18px;
    left: 70px;
    
    font-weight: 600;
    font-size: 1.2em;
    
    color: white;
`;

const ModalStudyCommentWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 7%;
`;

export class ModalStudyCommentList extends React.Component {
    componentDidMount () {
        this.props.commentMakeArrayRequest(this.props.postId);
        this.props.commentReceiveRequest();
    };

   submit = value => {
       const username = this.props.profile.username;
       const display = username ? username : this.props.profile.displayName;

       const comment = {
           comment: value.comment,
           NickName: display,
           postId: this.props.postId
       };

       this.props.commentSendRequest(comment, this.props.postId);
   };

    render () {
        const { CommentMakeArray, CommentReceive, hideModal, username } = this.props;

        return (
            <Wrapper>
                <ModalStudyCommentListHeader>
                    <ModalStudyCommentListHeaderWrapper>
                        <ModalStudyCommentListHeaderIcon>
                            <FaUser size={25} color="palevioletred"/>
                        </ModalStudyCommentListHeaderIcon>
                        <Span>{username}</Span>
                    </ModalStudyCommentListHeaderWrapper>
                </ModalStudyCommentListHeader>
                <ModalStudyCommentWrapper>
                    {
                        !CommentMakeArray.pending && CommentMakeArray.data.length !== 0 &&
                        CommentMakeArray.data["CommentsList"].map((CommentId, key) =>
                            <ModalStudyComment
                                CommentId={CommentId}
                                key={key}
                                CommentReceive={CommentReceive.data}
                            />
                        )
                    }
                </ModalStudyCommentWrapper>
                <ModalStudyCommentListForm
                    hideModal={hideModal}
                    onSubmit={this.submit}
                />
            </Wrapper>
        )
    }
}

ModalStudyCommentList.propTypes = propTypes;
ModalStudyCommentList.defaultTypes = defaultTypes;

const WrappedModalStudyCommentList = firebaseConnect()(ModalStudyCommentList);

export default connect(
    ({ firebase }) => ({
        profile: pathToJS(firebase, "profile")
    }),
    { commentMakeArrayRequest, commentReceiveRequest, hideModal }
)(WrappedModalStudyCommentList);
