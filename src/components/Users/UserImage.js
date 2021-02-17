import React from "react";
import {NavLink} from "react-router-dom";
import imageUser from "./imageUser.png";
import classes from "./Users.module.css";

export const UserImage = ({id, photos}) => {
    return (
        <div>
            <NavLink to={`/profile/${id}`}>
                <img src={photos.small === null ? imageUser : photos.small}
                     className={classes.userPhoto} alt={`Avatar`}/>
            </NavLink>
        </div>
    );
}

