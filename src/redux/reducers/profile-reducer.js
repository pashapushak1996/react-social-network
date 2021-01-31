import {ADD_POST, UPDATE_NEW_POST_BODY} from "../action-types";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 24}
    ],
    newPostBody: 'Hi'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostBody;
            return {
                ...state,
                newPostBody: '',
                posts: [...state.posts,{id:7,message: body}]
            }

        }
        case UPDATE_NEW_POST_BODY: {
            return {
                ...state,
                newPostBody: action.post
            }
        }
        default:
            return state;
    }
};

export default profileReducer;