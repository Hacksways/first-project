import s from './Users.module.css'
import lion from "../../Images/Lion.png";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
            id: 1,
            img: lion,
            followed: true,
            name: 'Mark',
            status: 'Smart bird',
            location: {country: 'Brazil', city: 'Rio de Janeiro'}
        },
            {
            id: 2,
            img: lion,
            followed: false,
            name: 'Artur',
            status: 'I am the king cobra!',
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
            {
            id: 3,
            img: lion,
            followed: true,
            name: 'Aleksey',
            status: '(Sneaks)',
            location: {country: 'Russia', city: 'Murmansk'}
        },
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div><img src={u.img} className={s.userPhoto}/></div>
                    <div>
                        {
                            u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
                Show more
            </div>)
            }
        </div>
    )
}

export default Users;