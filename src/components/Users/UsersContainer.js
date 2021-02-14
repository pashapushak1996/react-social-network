import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {Loader} from "../common/Loader/Loader";
import {
    followUser,
    requestUsers,
    setCurrentPage,
    setTotalUserCount,
    unfollowUser
} from "../../redux/reducers/users-reducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/reducers/users-selector'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return this.props.isLoading ? <Loader/> : <Users
            {...this.props} onPageChanged={this.onPageChanged}
        />

    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
    setTotalUserCount,
    setCurrentPage,
    requestUsers,
    unfollowUser,
    followUser
})(UsersContainer);