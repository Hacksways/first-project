import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        {message: 'Hello, how are you?', likesCount: '15'},
        {message: 'Hi, fine, thanks. I learn react, me like it', likesCount: '25'},
    ]

    let postsElements = postsData.map(p => <Post message={p.message} likes_count={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
