import React from "react";
import {Field, reduxForm} from "redux-form";
import {InputLogin} from "../common/formControl/loginFormControl/InputLogin";
import {required, maxLength} from "../../utils/validators/validators";

const maxLength30 = maxLength(30);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={`Login`} name={`email`} component={InputLogin} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={`Password`} name={`password`} component={`input`} type={`password`}/>
            </div>
            <div>
                <Field component={`input`} name={`rememberMe`} type={`checkbox`}/> rememberMe
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: `input`
})(LoginForm);


