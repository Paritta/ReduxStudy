import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import oc from "open-color";

const Wrapper = styled.div`
    position: absolute;
    
    bottom: 0;
    left: 0;
    
    width: 100%;
`;

const StyledField = styled(Field)`
    background-color: ${oc.gray[0]};
    width: 100%;
    height: 40px;
    font-size: 15px;
    border: 1px solid white;
    margin: 0;
    padding: 0 0 0 20px;
    border-radius: 0;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    padding: 0.7em 1em;
    
    border: 2px solid palevioletred;
    border-radius: 0;
    
    transition: all 0.3s easeo
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
    
    flex: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Form = styled.form`
    width: 100%;
`;

export let ModalStudyCommentListForm = ({ handleSubmit,hideModal }) => {
    return (
        <Wrapper>
            <Form onSubmit={ handleSubmit }>
                <Container>
                    <StyledField name="comment" component="input" type="text" required placeholder="댓글을 입력하세요 ..."/>
                    <ButtonWrapper>
                        <Button type="submit">전송</Button>
                        <Button onClick={() => hideModal()}>나가기</Button>
                    </ButtonWrapper>
                </Container>
            </Form>
        </Wrapper>
    )
};

ModalStudyCommentListForm = reduxForm({
    form: "ModalSignIn"
})(ModalStudyCommentListForm);

export default ModalStudyCommentListForm;
