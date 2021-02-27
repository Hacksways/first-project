import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://ribalych.ru/wp-content/uploads/2017/10/neudachnye-snimki-zhivotnyx_025.jpg"/>
            {props.message}
            <div>
                <span>Like {props.likes_count}</span>
            </div>
        </div>
    );
}

export default Post;
