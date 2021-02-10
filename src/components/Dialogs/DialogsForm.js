import React from "react";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={`textarea`} placeholder={`Enter your message`} name={`messageText`}/>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};


export const DialogsReduxForm = reduxForm({
    form: `dialogsForm`
})(DialogsForm);

