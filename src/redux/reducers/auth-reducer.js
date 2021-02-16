import {authService} from "../../services/authorization-service";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
            }
        }
        default : {
            return state
        }
    }
}

const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authService.authMe()
    if (response.resultCode === 0) {
        const {id, login, email} = response.data;
        dispatch(setUserData(id, login, email, true));
    }
    return response;
};

export const login = (email, password, rememberMe = false) => async (dispatch) => {
    const res = await authService.login(email, password, rememberMe)
    if (res.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let messageError = res.messages.length > 0 ? res.messages[0] : 'Some error';
        if (messageError === 'Enter valid Email') {
            messageError = "Enter valid Email or Password"
        }
        dispatch(stopSubmit("loginForm", {_error: messageError}))
    }
};

export const logout = () => async (dispatch) => {
    const res = await authService.logout()
    if (res.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};


export default authReducer;