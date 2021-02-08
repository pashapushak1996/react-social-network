import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, getStatus, updateStatus} from "../../redux/reducers/profile-reducer";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match: {params: {userId}}} = this.props;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
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
        status:state.profilePage.status
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