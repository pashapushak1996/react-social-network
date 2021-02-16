import React from "react";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


const Users = (props) => {

    return (
        <div>
            <Paginator pageSize={props.pageSize} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                       onPageChanged={props.onPageChanged}/>
            <User users={props.users} followUser={props.followUser} unfollowUser={props.unfollowUser}
                  followingInProgress={props.followingInProgress}/>
        </div>
    );
}

export default Users;
