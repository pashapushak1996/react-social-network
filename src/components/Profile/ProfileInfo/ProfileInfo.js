import React from "react";
import {Loader} from "../../Loader/Loader";
import classes from './ProfileInfo.module.css';
import imageProfile from '../../../assets/image/ProfileImage.svg'

const ProfileInfo = (props) => {
    const {profile} = props;

    return (
        !profile ? <Loader/> :
            <div>
                <div className={classes.content}>
                    <img src="https://i.pinimg.com/originals/aa/98/ce/aa98ce342844fe8f283bd3cb650425e7.jpg" alt=""/>
                </div>
                <div className={classes.descriptionBlock}>
                    <div>
                        <img className={classes.avatar}
                             src={!profile.photos.large ? imageProfile : profile.photos.large}
                             alt="Avatar"/>
                    </div>
                    <div>
                        <h1>{profile.fullName}</h1>
                        <h4>{profile.aboutMe}</h4>
                    </div>
                    <div>
                        <h2>Contacts:</h2>
                        <b>Instagram:
                            <i>{profile.contacts.instagram}</i>
                        </b>
                    </div>
                </div>
            </div>
    );
}

export default ProfileInfo;