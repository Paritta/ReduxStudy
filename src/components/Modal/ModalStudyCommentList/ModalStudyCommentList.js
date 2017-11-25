import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";
import { commentReceiveRequest } from "../../../modules/Comment/CommentReceive";
import { hideModal } from "../../../modules/Modal/Modal";
import PropTypes from "prop-types";
import FaUser from "react-icons/lib/fa/user";
import oc from "open-color";

const propTypes = {
    commentReceiveRequest: PropTypes.func,
    hideModal : PropTypes.func
};

const defaultTypes = {
    commentReceiveRequest () {},
    hideModal () {}
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
    
    background: ${oc.gray[6]};
`;

const HeaderWrapper = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: row;
`;

const HeaderIcon = styled.div`
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
    left: 70px;
    
    font-family: 'Hanna', fantasy;
    font-weight: 600;
    font-size: 1.2em;
    
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

       const comment = {
           comment: value.comment,
           NickName: display,
           postId: this.props.postId
       };

       this.setState({ PostUpdate: !this.state.PostUpdate});
       console.log(this.state.PostUpdate);

       this.props.commentSendRequest(comment, this.props.postId);
   };

    render () {
        const { CommentReceive, hideModal, username } = this.props;
        console.log(CommentReceive);

        return (
            <Wrapper>
                <Header>
                    <HeaderWrapper>
                        <HeaderIcon>
                            <FaUser size={25} color="gray"/>
                        </HeaderIcon>
                        <NickName>{username}</NickName>
                    </HeaderWrapper>
                </Header>
                <CommentWrapper>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        CommentReceive.data.map((Comment, key) =>
                            <ModalStudyComment
                                Comment={Comment}
                                key={key}
                                CommentReceive={CommentReceive.data}
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

const WrappedModalStudyCommentList = firebaseConnect()(ModalStudyCommentList);

export default connect(
    ({ firebase }) => ({
        profile: pathToJS(firebase, "profile")
    }),
    { commentReceiveRequest, hideModal }
)(WrappedModalStudyCommentList);
