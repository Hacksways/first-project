import snake from "../Images/Snake.png"
import owl from "../Images/Owl.png"
import raven from "../Images/Raven.png"

let _callSubscriber = () => {

}

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

    getState() {
        return this._state
    },

    addPost() {

        let newPost = {
            message: store._state.profilePage.newPostText,
            likesCount: 0,
        };

        store._state.profilePage.postsData.push(newPost);
        store._state.profilePage.newPostText = '';
        _callSubscriber(store);
    },

    updateNewPostText(newText) {
        store._state.profilePage.newPostText = newText;
        _callSubscriber(store);
    },

    subscribe(observer) {

        _callSubscriber = observer
    }
}


export default store;