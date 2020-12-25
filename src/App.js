import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    let {state: {profilePage, dialogsPage}} = props;
    return (
        <BrowserRouter>
            <div className={`app-wrapper`}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={`/profile`} render={() => <Profile profilePage={profilePage}/>}/>
                    <Route path={`/dialogs`} render={() => <Dialogs dialogsPage={dialogsPage}/>}/>
                    <Route path={`/news`} render={() => <News/>}/>
                    <Route path={`/music`} render={() => <Music/>}/>
                    <Route path={`/settings`} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
