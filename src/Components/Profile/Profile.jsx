import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";


const Profile = () => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts/>
        </div>
    );
}


export default Profile;
