import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg"
                    alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;