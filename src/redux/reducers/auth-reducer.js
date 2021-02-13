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

export const getAuthUserData = () => (dispatch) => {
    authService.authMe().then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data;
                dispatch(setUserData(id, login, email, true));
            }
        }
    );
};

export const login = (email, password, rememberMe = false) => (dispatch) => {
    authService.login(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0 || res.resultCode === 10) {
                dispatch(getAuthUserData());
            }
        });
};

export const logout = () => (dispatch) => {
    authService.logout().then(res => {
        if (res.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};


export default authReducer;