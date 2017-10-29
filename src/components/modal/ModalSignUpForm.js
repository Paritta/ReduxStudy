import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

// First
let ModalSignUpForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="email">email</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="Nickname">Nickname</label>
                <Field name="Nickname" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Field name="password" component="input" type="text" />
            </div>
            ModalSignInForm
            <button type="submit">Submit</button>
        </form>
    )
}

ModalSignUpForm = reduxForm({
    form: 'ModalSignUp'
})(ModalSignUpForm)

export default ModalSignUpForm;