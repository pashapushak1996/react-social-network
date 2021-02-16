import React from "react";
import {LoginReduxForm} from "./LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth}) => {

    const onSubmit = ({email, password, rememberMe}) => {
        login(email, password, rememberMe)
    };

    if (isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    login
})(Login);