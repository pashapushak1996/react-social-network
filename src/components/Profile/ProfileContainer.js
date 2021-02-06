import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../redux/reducers/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match: {params: {userId}}} = this.props;
        this.props.getProfile(userId)
    }


    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let profileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
})(profileContainerWithRouter);