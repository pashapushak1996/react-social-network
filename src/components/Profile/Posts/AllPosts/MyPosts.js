import React from "react";
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.postsBlock}>
                <Post message={`Hi, how are you`}/>
                <Post message={`Its my post`}/>
            </div>
        </div>
    );
};

export default MyPosts;