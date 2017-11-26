import React from "react";
import FaUser from "react-icons/lib/fa/user";
import PropTypes from "prop-types";
import { commentReceiveRequest } from "../../../modules/Comment/CommentReceive";
import { connect } from "react-redux";
import { getCommentReceive } from "../../../selector";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
    Comment: PropTypes.object,
    CommentReceive: PropTypes.object,
};

const defaultTypes = {
    Comment: {},
    CommentReceive: {}
};

const Wrapper = styled.div`
    height: 15%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    
    position: relative;
    
    padding: 25px 25px;
    
    &:hover {
        background: ${oc.gray[1]};
        border: 2px solid ${oc.gray[1]};
    }
    
    transition: all 0.5s ease;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-left: 30px;
`;

const CommentString = styled.div`
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    
    padding-top: 5px;
`;

const NickName = styled.div`
    font-family: 'Hanna', fantasy;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: ${oc.gray[5]};
`;

const CommentIcon = styled.div`
    height: 40px;
    width: 40px;
   
    border-radius: 100%;
    
    background: ${oc.gray[2]};
    
    top: 10px;
    left: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line = styled.div`
    background: ${oc.gray[1]};
    height: 1px;
`;

const DeleteMark = styled.div`
    position: absolute;
    top: 30%;
    right: 23%;
    
    opacity: 0.3;
    
    &:hover {
        opacity: 1;
    }
    
    &:before, &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 27px;
      width: 2px;
      background-color: #333;
      cursor: pointer;
    }
    
    &:before {
      transform: rotate(45deg);
    }
    
    &:after {
      transform: rotate(-45deg);
    }
`;


const CurrentTime = styled.div`
    font-size: 0.7em;
    padding: 5px; 0 0 0;
    color: ${oc.gray[6]}
`;

export class ModalStudyComment extends React.Component {
    render () {
        const { CommentReceive, Comment, auth, commentDeleteRequest } = this.props;
        const CommentId = Comment.CommentId;

        return (
            <div>
            <Wrapper>
                {/* 로그인 하고, 로그인 한 사람과 댓글을 쓴 사람이 일치하면 삭제 버튼을 띄운다 */}
                {
                    auth !== null && auth.uid === Comment.CommentAuthor &&
                    <DeleteMark
                        onClick={() => commentDeleteRequest(CommentId)}
                    />
                }
                <CommentIcon>
                    <FaUser size={25} color="white"/>
                </CommentIcon>
                <CommentWrapper>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <NickName>
                            {Comment.NickName}
                        </NickName>
                    }
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <CommentString>
                            {Comment.comment}
                        </CommentString>
                    }
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <CurrentTime>
                            {Comment.CurrentTime}
                        </CurrentTime>
                    }
                </CommentWrapper>
            </Wrapper>
            <Line />
            </div>
        )
    }
}

ModalStudyComment.propTypes = propTypes;
ModalStudyComment.defaultTypes = defaultTypes;

export default connect(
    state => ({ CommentReceive: getCommentReceive(state) }),
    { commentReceiveRequest }
)(ModalStudyComment);

