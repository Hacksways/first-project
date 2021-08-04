import s from './ProfileInformation.module.css'
import coast from '../../../Images/Сoast.jpg'
import Preloader from "../../Common/Preloader";

const ProfileInformation = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={coast}/>
            </div>
            <div className={s.avatarAndDescriptionBlock}>
                Avatar and description
                <img src={props.profile.photos.large}/>
                <div>Name: {props.profile.fullName}</div>
                <div>About Me: {props.profile.aboutMe}</div>
            </div>
        </div>
    )
}


export default ProfileInformation;
