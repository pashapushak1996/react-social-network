import React from "react";
import classes from "./Users.module.css";
import imageUser from "./imageUser.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {



    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div>
                {pages.map((page) => <span key={page}
                                           className={props.currentPage === page ? classes.selectedPage : ''}
                                           onClick={(e) => {
                                               props.onPageChanged(page)
                                           }}> {page}</span>
                )}
                {props.users.map((user) => <div key={user.id}>
                  <span>
                      <div>
                          <NavLink to={`/profile/${user.id}`}>
                              <img src={user.photos.small === null ? imageUser : user.photos.small}
                                   className={classes.userPhoto}/>
                          </NavLink>
                      </div>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                    <span>
                    <div>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() =>
                                props.unfollowUser(user.id)
                            }>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() =>
                               props.followUser(user.id)
                            }>Follow</button>}
                    </div>
                </span>
                </div>)}
            </div>
        </div>
    );
}

export default Users;
