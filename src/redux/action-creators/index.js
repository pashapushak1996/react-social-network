import {ADD_POST, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY, UPDATE_NEW_POST_BODY} from "../action-types";

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (value) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, message: value});


export const addPostCreator = () => ({type: ADD_POST});


export const updateNewPostBodyCreator = (value) =>
    ({type: UPDATE_NEW_POST_BODY, post: value});
