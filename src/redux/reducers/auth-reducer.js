import {authService} from "../../services/authorization-service";

export const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default : {
            return state
        }
    }
}

const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

export const getAuthUserData = () => (dispatch) => {
    authService.authMe().then(response => {
            if (response.resultCode === 0) {
                console.log(response.data);
                const {id, login, email} = response.data;
                dispatch(setUserData(id, login, email))
            }
        }
    )
}

export default authReducer;