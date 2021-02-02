import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setProfile} from "../../redux/reducers/profile-reducer";
import {userService} from "../../services/users-service";

class ProfileContainer extends React.Component {

    componentDidMount() {
        userService.getProfile(2).then(res => this.props.setProfile(res.data))
    }

    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profilePage.profile}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {
    setProfile
})(ProfileContainer);