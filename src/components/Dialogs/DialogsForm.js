import React from "react";
import {Field, reduxForm} from "redux-form";
import Textarea from "../common/formControl/loginFormControl/Textarea";
import {required, maxLength} from "../../utils/validators/validators";

const maxLength50 = maxLength(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={`Enter your message`} name={`messageText`} validate={[required,maxLength50]}/>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};


export const DialogsReduxForm = reduxForm({
    form: `dialogsForm`
})(DialogsForm);

