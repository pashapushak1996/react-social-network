import {profileService} from "../../services/profile-service";

export const ADD_POST = "ADD_POST";
export const SET_PROFILE = `SET_PROFILE`;
export const SET_STATUS = `SET_STATUS`;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 24}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 7, message: action.payload}]
            }

        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};


export const addPostCreator = (payload) => ({type: ADD_POST, payload});

const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => async (dispatch) => {
    const res = await profileService.getProfile(userId);
    dispatch(setProfile(res.data));
};
export const getStatus = (userId) => async (dispatch) => {
    const res = await profileService.getProfileStatus(userId);
    dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const res = await profileService.updateProfileStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};


export default profileReducer;