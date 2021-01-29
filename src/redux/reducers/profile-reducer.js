import {ADD_POST, UPDATE_NEW_POST_BODY} from "../action-types";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 24}
    ],
    newPostBody: 'Hello'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: Math.random() * 500,
                message: state.newPostBody
            };
            state.posts.push(newPost);

            state.newPostBody = '';
            return {...state}
        }
        case UPDATE_NEW_POST_BODY: {
            state.newPostBody = action.post;
            return {...state,
            newPostBody: action.post};
        }
        default:
            return state;
    }
};

export default profileReducer;