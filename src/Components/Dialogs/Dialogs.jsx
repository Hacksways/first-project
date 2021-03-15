import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef()
    let addMessage = () => {
        alert(newMessageElement.current.value)
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;