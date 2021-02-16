import React from "react";
import {UserImage} from "./UserImage";

export const User = ({users, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div>
            {users.map((user) => <div key={user.id}>
                  <span>
                     <UserImage user={user}/>
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
            </div>)}
        </div>
    );
}

