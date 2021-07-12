import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
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
        return <Users totalCountUsers={this.props.totalCountUsers} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                      follow={this.props.follow} unfollow={this.props.unfollow}/>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCountUsers: (totalCount) => {
            dispatch(setTotalCountUsersAC(totalCount));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);