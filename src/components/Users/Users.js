import React, {useEffect} from "react";
import styles from './Users.module.css';
import {userServise} from "../../services/users-service";
import imageUser from './imageUser.png';

export const Users = (props) => {
    const {getUsers} = userServise;

  useEffect(()=>{
      getUsers().then(res=>props.setUsers(res.items))
  },[])

    return (
        <div>
            {props.users.map((user) => <div key={user.id}>
                  <span>
                      <div>
                          {user.photos.small !== null ? <img src={user.photos.small}/> : <img className={styles.userPhoto} src={imageUser}/>}
                      </div>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <span>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                props.follow(user.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
            </div>)}
        </div>
    );
}

