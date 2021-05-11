const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsData: [
        {id: '1', name: 'Artur'},
        {id: '2', name: 'Aleksey'},
        {id: '3', name: 'Mark'},
        {id: '4', name: 'Maks'},
    ],
    messagesData: [
        {message: 'Yo'},
        {message: 'Whats up?'},
        {message: 'Hi, fine, learning'},
    ],
    newMassageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMassageText = {...state.newMassageText};
            stateCopy.newMassageText = action.newMassageText;
            return stateCopy;
        }
        case ADD_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newMassageText = {...state.newMassageText};
            let textMassage = state.newMassageText;
            let newMessage = {
                message: textMassage
            };
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMassageText = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, newMassageText: text})
}

export default messagesReducer;
