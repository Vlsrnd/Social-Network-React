import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/user-default.svg";
import styles from "../users.module.css";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  debugger;
  return (
    <div className={styles.user}>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small || userPhoto}
              alt="ava"
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        {user.followed ? (
          <button
            className={styles.userFollowBtn}
            disabled={followingInProgress.includes(user.id)}
            onClick={() => unfollow(user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={styles.userFollowBtn}
            disabled={followingInProgress.includes(user.id)}
            onClick={() => follow(user.id)}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.userInfo}>
        <div>Name: {user.name}</div>
        <div>Status: {user.status}</div>
      </div>
    </div>
  );
};

export default User;
