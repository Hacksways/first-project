import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInformation from "./ProfileInformation/ProfileInformation";


const Profile = (props) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}


export default Profile;
