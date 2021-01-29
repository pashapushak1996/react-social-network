import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);


    const onAddMessage = () => {
        props.addMessage()
    }
    const onChangeMessageBody = (e) => {
        const value = e.target.value;
        props.updateMessageBody(value);
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder={`Enter your message`}
                        value={props.newMessageBody}
                        onChange={event => onChangeMessageBody(event)}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
