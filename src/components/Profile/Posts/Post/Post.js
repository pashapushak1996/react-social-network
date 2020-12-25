import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    let {message,likesCount} = props;
    return (
        <div>
            <div className={classes.item}>
                <img
                    src="https://img.favpng.com/16/25/22/person-outline-computer-icons-people-png-favpng-uzkSybbSJsQTEsFvqNLGRHyts.jpg"
                    alt=""/>
                {message}
                <div>
                    <span>Likes: {likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;