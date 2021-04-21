import snake from "../Images/Snake.png"
import owl from "../Images/Owl.png"
import raven from "../Images/Raven.png"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {message: 'Hello everyone', likesCount: '15'},
                {message: 'Welcome to my page', likesCount: '25'},
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },

        sidebar: {
            friendsAndAvatars: [
                {
                    avatar: snake,
                    name: 'Artur'
                },
                {
                    avatar: owl,
                    name: 'Aleksey'
                },
                {
                    avatar: raven,
                    name: 'Mark'
                },
            ]
        },

    },
    _callSubscriber() {

    },

    getState() {

        return this._state
    },
    subscribe(observer) {

        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: text})
}


export default store;