import React from "react";
import {Loader} from "../../common/Loader/Loader";
import classes from './ProfileInfo.module.css';
import imageProfile from '../../../assets/image/ProfileImage.svg'
import Status from "./Status";

const ProfileInfo = (props) => {
    const {profile} = props;
    return (
        !profile ? <Loader/> :
            <div>
                <div className={classes.content}>

                </div>
                <div className={classes.descriptionBlock}>
                    <div>
                        <img className={classes.avatar}
                             src={!profile.photos.large ? imageProfile : profile.photos.large}
                             alt="Avatar"/>
                    </div>
                    <div>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    <div>
                        <Status status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
    );
}

export default ProfileInfo;