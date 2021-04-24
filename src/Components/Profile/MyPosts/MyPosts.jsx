import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likes_count={p.likesCount}/>)


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {

        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
