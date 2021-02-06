import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/slack.svg" alt="2"/>
            <div className={classes.authBlock}>
                {props.isAuth ? props.login : <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>)
}
export default Header;