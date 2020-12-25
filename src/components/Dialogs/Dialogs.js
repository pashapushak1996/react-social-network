import React from "react";
import classes from './Dialogs.module.css'
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

const Message = (props) => {
    const {message} = props;
    return (
        <div className={classes.dialog}>{message}</div>
    );
}

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Pavlo"} id={"1"}/>
                <DialogItem name={"Ivan"} id={"2"}/>
                <DialogItem name={"Stepan"} id={"3"}/>
                <DialogItem name={"Max"} id={"4"}/>
                <DialogItem name={"Yura"} id={"5"}/>
            </div>
            <div className={classes.messages}>
                <Message message={`Hi`}/>
                <Message message={`How is your it`}/>
                <Message message={`How are you`}/>
                <Message message={`You are the best`}/>
                <Message message={`Are you shy`}/>
            </div>
        </div>
    )
}

export default Dialogs;
