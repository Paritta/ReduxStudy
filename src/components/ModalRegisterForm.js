import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 50px;
    text-align: left
`;

const InputWrapper = styled.div`

`;

const InputLabel = styled.div`
    margin: 10px 0px 10px 0px;
    display: block;
`;

const InputField = styled.input`
    padding: 5px 300px 5px 0px;
`;

class ModalRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            count: 0,
            location: "",
            time: "",
            greeting: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        });
    }

    render () {
        return (
            <div>
                <Wrapper>
                    <form action="">
                        <InputLabel><label>스터디 제목</label></InputLabel>
                        <InputField
                            name="title"
                            onChange={this.handleInputChange}
                            type="text"
                            width="448"
                            height="49"/>

                        <InputLabel><label>카테고리</label></InputLabel>
                        <InputField
                            name="category"
                            onChange={this.handleInputChange}
                            type="text"/>

                        <InputLabel><label>장소</label></InputLabel>
                        <InputField
                            name="location"
                            onChange={this.handleInputChange}
                            type="text"/>

                        <InputLabel><label>스터디 시간</label></InputLabel>
                        <InputField
                            name="time"
                            onChange={this.handleInputChange}
                            type="text"/>

                        <InputLabel><label>모집 인</label></InputLabel>
                        <InputField
                            name="count"
                            onChange={this.handleInputChange}
                            type="text"/>

                        <InputLabel><label>스터디 소개</label></InputLabel>
                        <InputField
                            name="greeting"
                            onChange={this.handleInputChange}
                            type="text"/>
                    </form>
                </Wrapper>
            </div>
        )
    }
}

export default ModalRegisterForm;
