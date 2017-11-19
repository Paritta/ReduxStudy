import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";

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
   submit = value => {
       const comment = {
           comment: value.comment,
           NickName: this.props.profile.username,
           postId: this.props.postId
       };

       this.props.commentSendRequest(comment, this.props.postId);
   };

    render () {
        return (
            <Wrapper>
                <ModalStudyCommentListHeader>Header</ModalStudyCommentListHeader>
                <ModalStudyComment />
                    ModalStudyCommentList
                <hr />
                <ModalStudyCommentListForm
                    onSubmit={this.submit}
                />
            </Wrapper>
        )
    }
};

ModalStudyCommentList.propTypes = propTypes;
ModalStudyCommentList.defaultTypes = defaultTypes;

const WrappedModalStudyCommentList = firebaseConnect()(ModalStudyCommentList);

export default connect(
    ({ firebase }) => ({
        profile: pathToJS(firebase, "profile")
    })
)(WrappedModalStudyCommentList);
