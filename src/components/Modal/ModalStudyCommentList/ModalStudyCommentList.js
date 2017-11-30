import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";
import PropTypes from "prop-types";

const propTypes = {
    commentReceiveRequest: PropTypes.func,
    CommentReceive: PropTypes.object,
    commentDeleteRequest: PropTypes.func,
    hideModal : PropTypes.func,
    postId: PropTypes.string,
    auth: PropTypes.object,
    profile: PropTypes.object,
    HeartCount: PropTypes.number,
};

const defaultTypes = {
    commentReceiveRequest () {},
    commentSendRequest() {},
    commentReceive: {},
    commentDeleteRequest() {},
    hideModal () {},
    postId: "",
    auth: {},
    profile: {},
};

const Wrapper = styled.div`
    position: relative;
    
    height: 100%;
    width: 100%;
`;

const Header = styled.div`
    position: absolute;
    
    top: 0;
    left: 0;
    
    height: 7%;
    width: 100%;
    
    background: hsla(0, 0%, 0%, 0.8);
`;

const HeaderWrapper = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
`;

const CommentWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 7%;
    bottom: 11%;
    
    overflow: scroll;
`;

const NickName = styled.span`
    position: absolute;
    
    top: 18px;
    left: 20px;
    
    font-family: 'Hanna', fantasy;
    font-weight: 200;
    font-size: 1em;
    
    color: white;
`;

const HeartCountWrapper = styled.div`
    position: absolute;
    
    top: 18px;
    right: 25px;
    
    font-family: 'Hanna', fantasy;
    font-weight: 200;
    font-size: 1em;
    
    color: white;
`;

export class ModalStudyCommentList extends React.Component {
    state = {
        PostUpdate: false
    };

    componentDidMount () {
        this.props.commentReceiveRequest(this.props.postId);
    };

    componentDidUpdate (prevProps, prevState) {
        if(prevState.PostUpdate !== this.state.PostUpdate) {
            this.props.commentReceiveRequest(this.props.postId);
        }
    }

   submit = value => {
       const username = this.props.profile.username;
       const display = username ? username : this.props.profile.displayName;
       const CurrentTime = new Date().toLocaleString().slice(2, new Date().toLocaleString().length-3);

       const comment = {
           comment: value.comment,
           NickName: display,
           postId: this.props.postId,
           CurrentTime: CurrentTime,
           CommentAuthor: this.props.auth.uid,
       };

       this.setState({ PostUpdate: !this.state.PostUpdate});
       this.props.commentSendRequest(comment, this.props.postId);
   };

    render () {
        const { CommentReceive, hideModal, username, auth, commentDeleteRequest, postId, HeartCount } = this.props;

        return (
            <Wrapper>
                <Header>
                    <HeaderWrapper>
                        <NickName>{username}</NickName>
                        <HeartCountWrapper>좋아요 {HeartCount}개</HeartCountWrapper>
                    </HeaderWrapper>
                </Header>
                <CommentWrapper>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        CommentReceive.data.slice(0).reverse().map((Comment, key) =>
                            <ModalStudyComment
                                Comment={Comment}
                                key={key}
                                auth={auth}
                                CommentReceive={CommentReceive.data}
                                commentDeleteRequest={commentDeleteRequest}
                                postId={postId}
                            />
                        )
                    }
                </CommentWrapper>
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

export default ModalStudyCommentList;
