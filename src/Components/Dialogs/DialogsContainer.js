import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagesPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                }
                return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} messagesPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;