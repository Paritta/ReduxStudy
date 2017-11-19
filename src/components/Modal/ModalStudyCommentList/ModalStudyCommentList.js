import React from "react";
import ModalStudyComment from "../ModalStudyComment/ModalStudyComment";
import styled from "styled-components";
import ModalStudyCommentListForm from "./ModalStudyCommentListForm";

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
       console.log(value);
       this.props.commentSendRequest(value);
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

export default ModalStudyCommentList;
