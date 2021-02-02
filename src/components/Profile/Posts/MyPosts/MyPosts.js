import React from "react";
import classes from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    const onPostChange = (e) => {
        const value = e.target.value;
        props.updateNewPostBody(value);
    }

    const onAddPost = () => {
        props.addPostClick();
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostBody}
                        onChange={event => onPostChange(event)}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsBlock}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;