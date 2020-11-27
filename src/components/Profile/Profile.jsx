import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
  return (      
    <div>
      <ProfileInfo />
      <MyPosts postsElements={props.profile.postsElements}/>
    </div>
  )
}

export default Profile;