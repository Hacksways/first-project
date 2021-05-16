import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message} key={m.id}/>);

    let addMessageClick = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onMessageChange}
                              value={props.messagesPage.newMassageText}/>
                </div>
                <div>
                    <button onClick={addMessageClick}>Send message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;