import s from './ProfileInformation.module.css'
import coast from '../../../Images/Сoast.jpg'

const ProfileInformation = (props) => {
    return (
        <div>
            <div>
                <img src={coast}/>
            </div>
            <div className={s.avatarAndDescriptionBlock}>
                Avatar and description
            </div>
        </div>
    )
}


export default ProfileInformation;
