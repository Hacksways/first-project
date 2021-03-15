import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/state.jsx';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}
                     dialogsData={state.messagesPage.dialogsData}
                     messagesData={state.messagesPage.messagesData} friendsAndAvatars={state.sidebar.friendsAndAvatars}
                     addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;
