import s from './ProfileInformation.module.css'

const ProfileInformation = (props) => {
    return (
        <div>
            <div>
                <img src='https://pbs.twimg.com/media/CBGsPZcUkAAsJXi.jpg'/>
            </div>
            <div className={s.avatarAndDescriptionBlock}>
                Avatar and description
            </div>
        </div>
    )
}


export default ProfileInformation;
