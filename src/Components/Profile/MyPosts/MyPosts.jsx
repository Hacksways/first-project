import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello, how are you?' likes_count='15' /> 
        <Post message='Hi, fine, thanks. I learn react, me like it' likes_count='25' />
      </div>
    </div>
  );
}

export default MyPosts;
