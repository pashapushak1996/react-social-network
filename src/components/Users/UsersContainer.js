import {connect} from "react-redux";
import {
    followAC,
    setCurrentPage,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        unfollow:(userId)=>{
          dispatch(unfollowAC(userId))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);