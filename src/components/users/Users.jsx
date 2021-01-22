import React from 'react';
// import { NavLink } from 'react-router-dom';
// import userPhoto from '../../assets/images/user.png';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
// import styles from './users.module.css';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount} pageSize={pageSize} />
      {
        props.users.map(user => <User user={user} 
                                      followingInProgress={props.followingInProgress} 
                                      follow={props.follow}
                                      unfollow={props.unfollow}
                                      key={user.id} />) 
      }
    </div>
  )
}

export default Users;