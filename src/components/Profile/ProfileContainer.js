import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setProfile} from "../../redux/reducers/profile-reducer";
import {userService} from "../../services/users-service";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match: {params: {userId}}} = this.props;
        userService.getProfile(!userId ? 2 : userId).then(res => this.props.setProfile(res.data))
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
    setProfile
})(profileContainerWithRouter);