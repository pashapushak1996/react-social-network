import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import Textarea from "../../../common/formControl/Textarea";


const maxLength10 = maxLength(10);
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`postText`} component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <button>Add post</button>
        </form>
    );
}

export const MyPostsReduxForm = reduxForm({
    form: `postForm`
})(MyPostsForm);
