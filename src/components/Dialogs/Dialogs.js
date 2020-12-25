import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    const {dialogsPage:{dialogs,messages}} = props;
    console.log(props);
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)}
            </div>
            <div>
                {messages.map(m => <Message message={m.message} key={m.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
