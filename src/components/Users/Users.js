import React from "react";
import imageUser from "./imageUser.png";
import styles from "./Users.module.css";
import axios from "axios";


class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map((page) => <span key={page}
                                       className={this.props.currentPage === page ? styles.selectedPage : ''}
                                       onClick={(e) => {
                                           this.onPageChanged(page)
                                       }}>{page}</span>
            )}
            {this.props.users.map((user) => <div key={user.id}>
                  <span>
                      <div>
                          {<img src={user.photos.small === null ? imageUser : user.photos.small}
                                className={styles.userPhoto}/>}
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
                                this.props.unfollow(user.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
            </div>)}
        </div>
    }
}

export default Users;