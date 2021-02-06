import {userService} from "../../services/users-service";

// ACTION-TYPES

export const FOLLOW = `FOLLOW`;
export const UNFOLLOW = `UNFOLLOW`;
export const SET_USERS = `SET_USERS`;
export const SET_TOTAL_USER_COUNT = `SET_TOTAL_USER_COUNT`;
export const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isLoading: null,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isDisabled ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default :
            return state
    }
}

export default usersReducer;

// ACTION-CREATORS


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUserCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const toggleFollowingProgress = (isDisabled, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isDisabled, userId});


// THUNK

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsLoading(true))
    userService.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
        dispatch(toggleIsLoading(false))
    });
};

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userService.unfollowUser(userId)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userService.followUser(userId)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}
