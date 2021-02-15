import React, { useEffect, useState } from "react";
import styles from '../ProfileInfo/ProfileInfo.module.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };
  const onStatusChange = (e) => setStatus(e.currentTarget.value);

  return (
    <div className={styles.status}>
      {editMode ? (
        <input
          onBlur={() => deactivateEditMode()}
          onChange={onStatusChange}
          autoFocus={true}
          value={status}
        />
      ) : (
        <span onDoubleClick={() => activateEditMode()}>
          Status: {props.status || "---"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
