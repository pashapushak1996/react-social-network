import classes from './Message.module.css'
import React from "react";

const Message = (props) => {
    const {message} = props;
    return (
        <div
            className={classes.message}>{message}
        </div>
    );
}

export default Message;