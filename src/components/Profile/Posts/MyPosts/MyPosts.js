import React from "react";
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = ({posts}) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </div>
            <div className={classes.postsBlock}>
                {posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;