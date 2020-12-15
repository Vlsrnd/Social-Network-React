import React from 'react';
import Friend from './Friend/Friend';
import styles from './Friends.module.css';

function Friends(props) {
  const friendsElements = props.friends.map(friend => <Friend name={friend.name} key={friend.id} ava={friend.ava} />);

  return (
    <div>
      <h2>Friends</h2>
      <div className={styles.friends}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends