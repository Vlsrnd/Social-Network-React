import React from 'react';
import Preloader from '../../../Preloader/preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateUserStatus, isMyProfile, savePhoto}) => {
  if (!profile) return <Preloader />
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };
  return (      
    <div>
      <div className={styles.wallpapper}>
        {/* <img src={window.location.origin + '/image/big021.png'} alt="wallpapper"></img> */}
      </div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt="main avatar" />
        {isMyProfile && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
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