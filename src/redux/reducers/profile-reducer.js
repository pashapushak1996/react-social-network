import {profileService} from "../../services/profile-service";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
export const SET_PROFILE = `SET_PROFILE`;

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 24}
    ],
    newPostBody: '',
    profile: null
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
        default:
            return state;
    }
};

export default profileReducer;

export const addPostCreator = () => ({type: ADD_POST});


export const updateNewPostBodyCreator = (value) =>
    ({type: UPDATE_NEW_POST_BODY, post: value});

const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfile = (userId) => (dispatch) => {
    profileService.getProfile(!userId ? 14564 : userId).then(res => {
        dispatch(setProfile(res.data))
    })
}