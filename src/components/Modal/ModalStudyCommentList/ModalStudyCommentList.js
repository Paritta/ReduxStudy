import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { commentMakeArrayRequest } from "../../../modules/CommentMakeArray";
import { commentReceiveRequest } from "../../../modules/CommentReceive";

const propTypes = {
};

const defaultTypes = {
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
    
    height: 2%;
    width: 100%;
    
    background: palevioletred;
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
        const { CommentMakeArray, CommentReceive } = this.props;

        return (
            <Wrapper>
                <ModalStudyCommentListHeader>
                    Header
                </ModalStudyCommentListHeader>
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
                <hr />
                <ModalStudyCommentListForm
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
    { commentMakeArrayRequest, commentReceiveRequest }
)(WrappedModalStudyCommentList);
