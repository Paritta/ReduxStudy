import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import oc from "open-color";

const Wrapper = styled.div`
    position: absolute;
    
    bottom: 0;
    left: 0;
    
    padding: 30px 0 10px 0;
`;

const StyledField = styled(Field)`
    background-color: ${oc.gray[0]};
    width: 300px;
    height: 40px;
    font-size: 15px;
    border: 2px solid white;
    padding-left: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    padding: 0.25em 1em;
    
    margin-left: 20px;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
`;

export let ModalStudyCommentListForm = ({ handleSubmit }) => {
    return (
        <Wrapper>
            <form onSubmit={ handleSubmit }>
                <Container>
                    <StyledField name="comment" component="input" type="text" required placeholder="comment"/>
                    <Button type="submit">전송</Button>
                </Container>
            </form>
        </Wrapper>
    )
};

ModalStudyCommentListForm = reduxForm({
    form: "ModalSignIn"
})(ModalStudyCommentListForm);

export default ModalStudyCommentListForm;
