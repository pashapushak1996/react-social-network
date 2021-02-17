import React from "react";
import {UserImage} from "./UserImage";

export const User = ({user, followingInProgress, followUser, unfollowUser}) => {
    return (
        <div>
            <div>
                  <span>
                     <UserImage {...user}/>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <span>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                                unfollowUser(user.id)
                            }>Unfollow</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                                followUser(user.id)
                            }>Follow</button>}
                    </div>
                </span>
            </div>
        </div>
    );
}

