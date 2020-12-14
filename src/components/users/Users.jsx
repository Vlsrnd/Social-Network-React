import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
  
  if (props.users.length === 0){
    props.setUsers([ 
      { id: 1, 
        name: 'Dmitry', 
        surname: 'Karapet', 
        photoUrl: '/ava/ava.jpg', 
        location: {country: 'Belarus', city: 'Minsk'}, 
        status: `I'm looking for a Job right now...`, 
        followed: true},
      { id: 2, 
        name: 'Svetlana', 
        surname: 'Dubina', 
        photoUrl: '/ava/ava.jpg', 
        location: {country: 'Belarus', city: 'Minsk'}, 
        status: `I'm so pretty`, 
        followed: true},
      { id: 3, 
        name: 'Sergey', 
        surname: 'Sinvil', 
        photoUrl: '/ava/ava.jpg', 
        location: {country: 'Ukraine', city: 'Kiev'}, 
        status: `Yupeeee`, 
        followed: false},
      { id: 4, 
        name: 'Andrew', 
        surname: 'Tishkin', 
        photoUrl: '/ava/ava.jpg', 
        location: {country: 'Russia', city: 'Moscow'}, 
        status: `mad`, 
        followed: false}
    ])
  }

  return <div>
    {
      props.users.map(user => <div key={user.id}>
        <span>
          <div>
            <img src={user.photoUrl} alt="ava" className={styles.userPhoto} />
          </div>
          <div>
            {user.followed 
              ? <button onClick={() => props.unfollow(user.id)} >Unfollow</button> : 
                <button onClick={() => props.follow(user.id)} >Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div className={styles.name}>{user.name} {user.surname}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>
      </div>)
    }
    </div>
};

export default Users;