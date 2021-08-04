import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";


const Profile = (props) => {
    return (
        <div>
            <ProfileInformation profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;
