import {getAuthUserData} from "./auth-reducer";

const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
};

export default appReducer;

const initializeSuccess = () => ({type: INITIALIZE_SUCCESS});

export const initializeData = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializeSuccess());
    });
};