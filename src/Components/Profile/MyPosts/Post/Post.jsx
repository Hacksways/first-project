import s from './Post.module.css'
import walrus from '../../../../Images/Walrus.jpg'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src={walrus}/>
            {props.message}
            <div>
                <span>Like {props.likes_count}</span>
            </div>
        </div>
    );
}

export default Post;
