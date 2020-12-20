import React from "react";
import classes from './AllPosts.module.css';
import Post from "../Post/Post";

const AllPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message={`Hi, how are you`}/>
                <Post message={`Its my post`}/>
            </div>
        </div>
    );
};

export default AllPosts;