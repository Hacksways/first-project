import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }


    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} messagesPage={state}/>
}

export default DialogsContainer;