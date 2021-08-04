import s from "./Users.module.css";
import lion from "../../Images/Lion.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let quantityPages = Math.ceil(props.totalCountUsers / props.pageSize);

    let pages = [];

    for (let i = 1; i <= quantityPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : lion} className={s.userPhoto}/>
                        </div>
                    </NavLink>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users;