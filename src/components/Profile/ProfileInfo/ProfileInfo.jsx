import React, { useState } from "react";
import Preloader from "../../Preloader/preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

import userPhoto from "../../../assets/images/user-default.svg";
import loadPhotoImg from "../../../assets/images/load.svg";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isMyProfile,
  savePhoto,
  saveProfileData,
}) => {
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);

  if (!profile) return <Preloader />;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfileData(formData).then(() => setEditMode(false));
  };

  return (
    <>
      <div className={styles.profileInfo}>
        <div className={styles.photoBlock}>
          <img
            src={profile.photos.large || userPhoto}
            className={styles.mainPhoto}
            alt="user avatar"
          />
          {isMyProfile && (
            <div className={styles.changePhotoBtn}>
              <label htmlFor="input_file">
                <img src={loadPhotoImg} alt="load" />
              </label>
              <input
                id="input_file"
                type={"file"}
                onChange={onMainPhotoSelected}
              />
            </div>
          )}
        </div>
        <div className={styles.descriptionBlock}>
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              profile={profile}
              isMyProfile={isMyProfile}
              activateEditMode={activateEditMode}
            />
          )}
        </div>
      </div>
      <ProfileStatus 
        status={status} 
        updateUserStatus={updateUserStatus} />
    </>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return contactValue ? (
    <div>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  ) : (
    <div />
  );
};

const ProfileData = ({ profile, isMyProfile, activateEditMode }) => {
  return (
    <div>
      {isMyProfile && (
        <button onClick={activateEditMode} className={styles.editModeBtn}>
          edit
        </button>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.entries(profile.contacts).map((contact) => {
          return (
            <Contact
              key={contact[0] + "" + contact[1]}
              contactTitle={contact[0]}
              contactValue={contact[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
