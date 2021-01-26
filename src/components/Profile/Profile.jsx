import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (      
    <div>
      <ProfileInfo profile={props.profile} 
                   status={props.status} 
                   updateUserStatus={props.updateUserStatus}
                   isMyProfile={props.isMyProfile}
                   savePhoto={props.savePhoto}
                   saveProfileData={props.saveProfileData}
                   />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;