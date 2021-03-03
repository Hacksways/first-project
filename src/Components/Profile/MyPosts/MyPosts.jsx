import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        {message: 'Hello, how are you?', likeCount: '15'},
        {message: 'Hi, fine, thanks. I learn react, me like it', likeCount: '25'},
    ]


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
                <Post message={postsData[0].message} likes_count={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likes_count={postsData[1].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
