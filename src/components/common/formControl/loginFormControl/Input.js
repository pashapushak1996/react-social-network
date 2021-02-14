import React from "react";
import classes from './Input.module.css';

export const Input = ({input, meta, ...props}) => {
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

