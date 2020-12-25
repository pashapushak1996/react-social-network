import React from "react";
import MyPosts from "./Posts/MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({props}) => {
    let {profilePage:{posts}} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );

};

export default Profile;