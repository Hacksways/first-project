import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map(m => <Message message={m.message}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {

        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);

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
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;