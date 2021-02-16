import React, {memo} from "react";
import classes from './MyPosts.module.css';
import Post from "../Post/Post";
import {MyPostsReduxForm} from "./MyPostsForm";

const MyPosts = memo((props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    const addNewPost = (values) => {
        props.addPostClick(values.postText);
    }

    return (
        <div>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={classes.postsBlock}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;