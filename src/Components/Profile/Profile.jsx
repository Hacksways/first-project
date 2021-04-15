import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";


const Profile = (props) => {

    return (
        <div>
            <ProfileInformation/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}


export default Profile;
