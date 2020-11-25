import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (      
    <div>
      <div>
        <img src="./logo.png" alt="avatar"></img>
      </div>
      <div>
        <img src="./logo.png" alt="avatar"></img>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;