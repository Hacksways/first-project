import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id: '1', name: 'Panteleimon'},
        {id: '2', name: 'Aleksey'},
        {id: '3', name: 'Mark'},
        {id: '4', name: 'Maks'},
    ]

    let messagesData = [
        {message: 'Yo'},
        {message: 'Whats up?'},
        {message: 'Hi, fine, learning'},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;