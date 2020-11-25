import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (      
    <div>
      <div>
        <img src="./logo.png" alt="avatar"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src="./logo.png" alt="avatar"></img>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;