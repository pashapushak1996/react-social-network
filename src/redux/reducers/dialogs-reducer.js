const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


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
        {id: 6, message: 'Are you shy'}],
    newMessageBody: ``
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            };

        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state, newMessageBody: action.message
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (value) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, message: value});