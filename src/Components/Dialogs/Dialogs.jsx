import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Panteleimon' id='1'/>
                <DialogItem name='Aleksey' id='2'/>
                <DialogItem name='Mark' id='3'/>
                <DialogItem name='Maks' id='4'/>
            </div>
            <div className={s.messages}>
                <Message message='Yo'/>
                <Message message='Whats up?'/>
                <Message message='Hi, fine, learning'/>
            </div>
        </div>
    )
}

export default Dialogs;