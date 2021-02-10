import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={`Login`} name={`login`} component={`input`}/>
            </div>
            <div>
                <Field placeholder={`Password`} name={`password`} component={`input`}/>
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


