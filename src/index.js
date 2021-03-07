import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./Components/Profile/MyPosts/Post/Post";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import Message from "./Components/Dialogs/Message/Message";


let postsData = [
    {message: 'Hello, how ar you?', likesCount: '15'},
    {message: 'Hi, fine, thanks. I learn react, me like it', likesCount: '25'},
]

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


ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
