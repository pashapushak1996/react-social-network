import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsLoading,
    unfollow,
} from "../../redux/reducers/users-reducer";
import React from "react";
import {userService} from "../../services/users-service";
import Users from "./Users";
import {Loader} from "../Loader/Loader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true)
        userService.getUsers().then(res => {
            this.props.setUsers(res.items)
            this.props.setTotalUserCount(res.totalCount)
            this.props.toggleIsLoading(false)
        })

    }


    onPageChanged = (pageNumber) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        userService.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.toggleIsLoading(false)
            })
    }


    render() {
        return this.props.isLoading ? <Loader/> : <Users
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            isLoading={this.props.isLoading}
        />

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleIsLoading: (isLoading) => {
//             dispatch(toggleIsLoading(isLoading))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCount(totalCount))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         }
//     }
// }


export default connect(mapStateToProps, {
    toggleIsLoading,
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage
})(UsersContainer);