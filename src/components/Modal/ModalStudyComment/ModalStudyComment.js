import React from "react";
import FaUser from "react-icons/lib/fa/user";
import PropTypes from "prop-types";
import { commentReceiveRequest } from "../../../modules/CommentReceive";
import { connect } from "react-redux";
import { getCommentReceive } from "../../../selector";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
    CommentId: PropTypes.string.isRequired,
    CommentReceive: PropTypes.object.isRequired,
};

const defaultTypes = {
    CommentId: "",
    CommentReceive: {}
};

const Wrapper = styled.div`
    height: 10%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    
    position: relative;
    
    padding: 10px 15px;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-left: 10px;
`;

const Comment = styled.div`
    font-size: 15px;
    font-weight: 300;
`;

const NickName = styled.div`
    font-size: 15px;
    font-weight: 300;
`;

const CommentIcon = styled.div`
    height: 35px;
    width: 35px;
   
    border-radius: 100%;
    
    background: ${oc.gray[2]};
    
    top: 10px;
    left: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line = styled.div`
    background: black;
    height: 1px;
`;

export class ModalStudyComment extends React.Component {
    render () {
        const { CommentReceive } = this.props;

        return (
            <div>
            <Wrapper>
                <CommentIcon>
                    <FaUser size={25} color="white"/>
                </CommentIcon>
                <CommentWrapper>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <Comment>
                            { CommentReceive.data[this.props.CommentId].comment }
                        </Comment>
                    }
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <NickName>
                            { CommentReceive.data[this.props.CommentId].NickName }
                        </NickName>
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

