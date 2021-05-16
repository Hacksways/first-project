import s from './sidebar.module.css'
import Friends from "./Friends/friends";


const Sidebar = (props) => {
    let friendsElements = props.friendsAndAvatars.map(f => <Friends name={f.name} avatar={f.avatar} key={f.id}/>)
    return (
        <div className={s.avatarsFriends}>
            {friendsElements}
        </div>
    )
}


export default Sidebar;