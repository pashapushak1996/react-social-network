import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeData} from "./redux/reducers/app-reducer";
import {Loader} from "./components/common/Loader/Loader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeData()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className={`app-wrapper`}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={`/profile/:userId?`} render={() => <ProfileContainer/>}/>
                    <Route path={`/dialogs`} render={() => <DialogsContainer/>}/>
                    <Route path={`/news`} render={() => <News/>}/>
                    <Route path={`/music`} render={() => <Music/>}/>
                    <Route path={`/settings`} render={() => <Settings/>}/>
                    <Route path={`/users`} render={() => <UsersContainer/>}/>
                    <Route path={`/login`} render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeData}))(App);
