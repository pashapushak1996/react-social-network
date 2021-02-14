import React from "react";
import classes from './Textarea.module.css';

const Textarea = ({input, meta, ...props}) => {
    const {touched, error} = meta;
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError ? <span>{error}</span> : undefined}
            </div>
        </div>
    )
};

export default Textarea;