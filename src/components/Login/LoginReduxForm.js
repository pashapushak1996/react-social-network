import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControl/loginFormControl/Input";
import {required} from "../../utils/validators/validators";
import classes from './../common/formControl/loginFormControl/Textarea.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={`Login`} name={`email`} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={`Password`} name={`password`} component={Input} type={`password`}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={`input`} name={`rememberMe`} type={`checkbox`}/> rememberMe
            </div>
            <div>
                {props.error ? <span className={classes.formSummaryError}>{props.error}</span> : undefined}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: `loginForm`
})(LoginForm);


