import s from './friends.module.css'


const Friends = (props) => {
    return (
        <div className={s.itemFriends}>
            <img
                src={props.avatar}/>
            {props.name}
        </div>
    )

}


export default Friends;