import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 24}
            ],
            newPostBody: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pavlo'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Stepan'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'John'},
                {id: 5, name: 'John'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'You are the best'},
                {id: 4, message: 'Hello dear'},
                {id: 5, message: 'Are you shy'}],
            newMessageBody: ``
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log(`No subscriber`)
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export default store;

