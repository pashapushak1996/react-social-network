import {profileService} from "../../services/profile-service";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
export const SET_PROFILE = `SET_PROFILE`;
export const SET_STATUS = `SET_STATUS`;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 24}
    ],
    newPostBody: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostBody;
            return {
                ...state,
                newPostBody: '',
                posts: [...state.posts, {id: 7, message: body}]
            }

        }
        case UPDATE_NEW_POST_BODY: {
            return {
                ...state,
                newPostBody: action.post
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


export const addPostCreator = () => ({type: ADD_POST});


export const updateNewPostBodyCreator = (value) =>
    ({type: UPDATE_NEW_POST_BODY, post: value});

const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => (dispatch) => {
    profileService.getProfile(!userId ? 14564 : userId).then(res => {
        dispatch(setProfile(res.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileService.getProfileStatus(!userId ? 14564 : userId)
        .then(res => dispatch(setStatus(res.data)))
};

export const updateStatus = (status) => (dispatch) => {
    profileService.updateProfileStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
};


export default profileReducer;