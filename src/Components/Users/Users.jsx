import React from 'react'
import s from './Users.module.css'
import lion from "../../Images/Lion.png";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                debugger
                this.props.setTotalCountUsers(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount);
        });
    }

    render() {
        let quantityPages = Math.ceil(this.props.totalCountUsers / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= quantityPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {
                            this.onPageChanged(p)
                        }}>{p} </span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div><img src={u.photos.small != null ? u.photos.small : lion} className={s.userPhoto}/></div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}

export default Users;