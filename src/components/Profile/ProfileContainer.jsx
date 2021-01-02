import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data);
    })
  }

  render = () => <Profile {...this.props} profile={this.props.profile}/>
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));