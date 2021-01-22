import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import Paginator from '../common/Paginator/Paginator';
import styles from './users.module.css';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount} pageSize={pageSize} />
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small || userPhoto} alt="ava" 
                  className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
              {user.followed 
                ? <button disabled={props.followingInProgress.includes(user.id)} 
                  onClick={() => { props.unfollow(user.id) }}>
                  Unfollow</button> 
                : <button disabled={props.followingInProgress.includes(user.id)}
                  onClick={() => { props.follow(user.id) }}>
                  Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div className={styles.name}>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;