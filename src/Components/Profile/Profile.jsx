import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInformation/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}


export default Profile;
