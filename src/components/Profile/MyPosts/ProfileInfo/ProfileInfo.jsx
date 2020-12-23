import React from 'react';
import Preloader from '../../../Preloader/preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />
  return (      
    <div>
      <div className={styles.wallpapper}>
        <img src={window.location.origin + '/image/big021.png'} alt="wallpapper"></img>
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} alt="main avatar" />
        <div>
          <p>Name: Rick and Morty</p>
          <p>Age: no informations</p>
          <p>Education: no informations</p>
          <p>Job: no informations</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;