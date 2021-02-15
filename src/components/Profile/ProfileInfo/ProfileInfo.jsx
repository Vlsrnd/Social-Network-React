import React, { useState } from "react";
import Preloader from "../../Preloader/preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user-default.svg";
import ProfileDataForm from "./ProfileDataForm";

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
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          className={styles.mainPhoto}
          alt="user avatar"
        />
        {isMyProfile && <input type={"file"} onChange={onMainPhotoSelected} />}
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
      <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return contactValue ? (
    <div>
      <b>{contactTitle}:</b>
      {contactValue}
    </div>
  ) : <div/>;
};

const ProfileData = ({ profile, isMyProfile, activateEditMode }) => {
  return (
    <div>
      {isMyProfile && (
        <div>
          <button onClick={activateEditMode}>edit</button>
        </div>
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
