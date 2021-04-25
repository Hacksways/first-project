const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMassageText = action.newMassageText;
            return state;
        case ADD_MESSAGE:
            let textMassage = state.newMassageText;
            let newMessage = {
                message: textMassage
            };
            state.messagesData.push(newMessage);
            state.newMassageText = '';
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, newMassageText: text})
}

export default messagesReducer;
