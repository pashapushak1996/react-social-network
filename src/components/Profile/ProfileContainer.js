import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let {match: {params: {userId}}} = this.props;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            this.props.history.push(`/login`)
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }



    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);