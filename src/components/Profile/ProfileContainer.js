import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../redux/reducers/profile-reducer";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match: {params: {userId}}} = this.props;
        this.props.getProfile(userId)
    }


    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);