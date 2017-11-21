import React from "react";
import styled from "styled-components";
import { Field, reduxForm  } from "redux-form";
import oc from "open-color";
import PropTypes from "prop-types";

const propTypes = {
    handleSubmit: PropTypes.func,
    hideModal: PropTypes.func,
    AnimateTurn: PropTypes.func,
    AnimateDown: PropTypes.func
};

const defaultTypes = {
    handleSubmit() {},
    hideModal() {},
    AnimateTurn() {},
    AnimateDown() {},
};

const Wrapper = styled.div`
    padding: 30px 0 10px 0;
`;

const StyledField = styled(Field)`
    background-color: ${oc.gray[0]};
    width: 400px;
    height: 40px;
    font-size: 15px;
    border: 2px solid white;
    padding-left: 20px;
    margin-bottom: 10px;
`;

const StyledSelect = StyledField.extend`
    width: 426px;
    height: 47px;
`;

const IntroField = StyledField.extend`
    padding: 0 0 200px 20px;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
`;


// 스터디 제목, 카테고리, 장소, 스터디 시간, 모집 명수, 스터디 소개
export class ModalRegisterForm extends React.Component {
    hideAnimate () {
        this.props.animateTurn();
        setTimeout(this.props.hideModal, 500);
        setTimeout(this.props.animateDown, 600);
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <Wrapper>
                <form onSubmit={ handleSubmit }>
                    <div>
                        <StyledField name="StudyTitle" component="input" type="text" required placeholder="스터디 이름"/>
                    </div>
                    <StyledSelect name="Category" component="select">
                        <option value="MaterialScience">신소재공학과</option>
                        <option value="Nursing">간호학과</option>
                        <option value="ITEngineering">IT융합응용공학과</option>
                        <option value="ComputerScience">컴퓨터공학과</option>
                        <option value="Chemical">화학공학과</option>
                    </StyledSelect>
                    <div>
                        <StyledField name="Location" component="input" type="text" required placeholder="장소"/>
                    </div>
                    <div>
                        <StyledField name="Time" component="input" type="text" required placeholder="시간"/>
                    </div>
                    <div>
                        <StyledField name="Number" component="input" type="text" required placeholder="모집 인원"/>
                    </div>
                    <div>
                        <IntroField name="Introduction" component="input" type="text" required placeholder="스터디 소개"/>
                    </div>
                    <Button type="submit">
                        등록
                    </Button>
                    <Button onClick={() => this.hideAnimate()}>나가기</Button>
                </form>
            </Wrapper>
        )
    }
};

ModalRegisterForm.propTypes = propTypes;
ModalRegisterForm.defaultTypes = defaultTypes;

ModalRegisterForm = reduxForm({
    form: "ModalRegisterForm"
})(ModalRegisterForm);

export default ModalRegisterForm;
