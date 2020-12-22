import React from 'react';
import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
  };
  // debugger
  return (
    <div>
      <div>
        {
          pages.map(p => {
            return <span key={p} className={props.currentPage === p && styles.selectedPage} 
              onClick={() => { props.onPageChanged(p) }}>{p}</span>
            }
          )
        }
      </div>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small || userPhoto} alt="ava" className={styles.userPhoto} />
            </div>
            <div>
              {user.followed 
                ? <button onClick={() => props.unfollow(user.id)} >Unfollow</button> : 
                  <button onClick={() => props.follow(user.id)} >Follow</button>}
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