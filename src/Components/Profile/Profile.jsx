import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://pbs.twimg.com/media/CBGsPZcUkAAsJXi.jpg' />
      </div>
      <div>Avatar and description</div>
      <MyPosts />
    </div>
  );
}



export default Profile;
