import s from './Post.module.css'
const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://ribalych.ru/wp-content/uploads/2017/10/neudachnye-snimki-zhivotnyx_025.jpg" />
          Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;
