import classes from './DialogsItem.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const {name, id} = props;
    let path = `/dialogs/${id}`;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;