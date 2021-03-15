import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";


const Profile = (props) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts postsData={props.postsData} addPost={props.addPost} newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}


export default Profile;
