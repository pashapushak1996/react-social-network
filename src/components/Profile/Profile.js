import React from "react";
import AllPosts from "./Posts/AllPosts/AllPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <AllPosts/>
        </div>
    );

};

export default Profile;