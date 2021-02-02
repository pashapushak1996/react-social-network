import {ADD_POST, UPDATE_NEW_POST_BODY} from "../action-types";

const SET_PROFILE = `SET_PROFILE`;

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

export const setProfile = (profile) => ({type: SET_PROFILE, profile});