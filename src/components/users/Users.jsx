import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount} pageSize={pageSize} />
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