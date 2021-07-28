import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setSwitchIsFetching,
    setTotalCountUsers,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setSwitchIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setSwitchIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setSwitchIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setSwitchIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCountUsers={this.props.totalCountUsers} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalCountUsers,
    setCurrentPage,
    setSwitchIsFetching,
})(UsersContainer);