import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";


const renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
    ;
}

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state)
});

