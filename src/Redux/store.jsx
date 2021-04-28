import snake from "../Images/Snake.png"
import owl from "../Images/Owl.png"
import raven from "../Images/Raven.png"
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMassageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;