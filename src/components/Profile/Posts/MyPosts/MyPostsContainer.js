import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostCreator, updateNewPostBodyCreator} from "../../../../redux/action-creators";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostBody: state.profilePage.newPostBody
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPostClick: () => {
            dispatch(addPostCreator())
        },
        updateNewPostBody: (value) => {
            dispatch(updateNewPostBodyCreator(value))
        }
    };
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);