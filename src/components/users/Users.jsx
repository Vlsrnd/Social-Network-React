import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
  };
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
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small || userPhoto} alt="ava" 
                  className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
              {user.followed 
                ? <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': '67086d1f-4a6b-4aa0-acdc-46ba8a33e5e5',
                    },
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) props.unfollow(user.id);
                      else console.error(response.data.messages);
                    })

                }} >Unfollow</button> : 
                  <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},{
                      withCredentials: true,
                      headers: {
                        'API-KEY': '67086d1f-4a6b-4aa0-acdc-46ba8a33e5e5',
                      },
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) props.follow(user.id);
                      else console.error(response.data.messages);
                    })

                  }} >Follow</button>}
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