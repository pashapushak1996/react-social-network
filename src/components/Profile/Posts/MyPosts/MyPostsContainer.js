import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostCreator} from "../../../../redux/reducers/profile-reducer";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPostClick: (payload) => {
            dispatch(addPostCreator(payload))
        }
    };
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);