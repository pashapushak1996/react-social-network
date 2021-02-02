import React from "react";
import {Loader} from "../../Loader/Loader";

const ProfileInfo = (props) => {
    const {profile} = props;

    return (
        !profile ? <Loader/> :
            <div>
                <div>
                    <img
                        src={profile.photos.large}
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
    );
}

export default ProfileInfo;