import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import {DialogsReduxForm} from "./DialogsForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);


    const addNewMessage = (values) => {
        if (values.messageText.length > 20) {
            return;
        }
        props.addMessage(values.messageText)
    }
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={addNewMessage}/>

        </div>
    )
}

export default Dialogs;
