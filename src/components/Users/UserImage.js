import React from "react";
import {NavLink} from "react-router-dom";
import imageUser from "./imageUser.png";
import classes from "./Users.module.css";

export const UserImage = ({user}) => {
    return (
        <div>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small === null ? imageUser : user.photos.small}
                     className={classes.userPhoto}/>
            </NavLink>
        </div>
    );
}

