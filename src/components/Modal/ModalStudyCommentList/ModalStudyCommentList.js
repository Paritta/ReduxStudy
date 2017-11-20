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
import oc from "open-color";

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
    
    height: 5%;
    width: 100%;
    
    margin: 20px;
    
`;

const ModalStudyCommentListHeaderWrapper = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
`;

const ModalStudyCommentListHeaderIcon = styled.div`
    height: 50px;
    width: 50px;
   
    border-radius: 100%;
    border: 4px solid ${oc.gray[2]};
`;

const Span = styled.span`
    position: absolute;
    
    top: 18px;
    left: 70px;
    
    font-weight: 600;
    font-size: 1.2em;
`;

const Line = styled.div`
    width: 100%;
    background: black;
    height: 2px;
    
    position: absolute;
`;

export class ModalStudyCommentList extends React.Component {
    componentDidMount () {
        this.props.commentMakeArrayRequest(this.props.postId);
        this.props.commentReceiveRequest();
    };

   submit = value => {
       const comment = {
           comment: value.comment,
           NickName: this.props.profile.username,
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
                        <ModalStudyCommentListHeaderIcon />
                        <Span>작성자: {username}</Span>
                    </ModalStudyCommentListHeaderWrapper>
                </ModalStudyCommentListHeader>
                <Line />
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
