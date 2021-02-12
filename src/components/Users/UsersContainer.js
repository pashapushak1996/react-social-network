import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {Loader} from "../common/Loader/Loader";
import {
    followUser,
    getUsers,
    setCurrentPage,
    setTotalUserCount,
    unfollowUser
} from "../../redux/reducers/users-reducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return this.props.isLoading ? <Loader/> : <Users
            {...this.props} onPageChanged={this.onPageChanged}
        />

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    setTotalUserCount,
    setCurrentPage,
    getUsers,
    unfollowUser,
    followUser
})(UsersContainer);