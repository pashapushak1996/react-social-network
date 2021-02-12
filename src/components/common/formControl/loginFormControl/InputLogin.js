import React from "react";
import classes from './InputLogin.module.css';

export const InputLogin = ({input, meta, ...props}) => {
    const {error, touched} = meta;
    const hasError = touched && error;
    return (
        <div>
            <div>
                <input type="text" {...input} {...props} className={hasError ? classes.error : ''}/>
            </div>
            <div>
                {hasError ? <span>{error} </span>: undefined}
            </div>
        </div>
    );
}

