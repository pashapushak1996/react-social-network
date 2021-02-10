const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Pavlo'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Stepan'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'John'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'You are the best'},
        {id: 5, message: 'Hello dear'},
        {id: 6, message: 'Are you shy'}]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.payload}]
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (payload) => ({type: SEND_MESSAGE, payload});
