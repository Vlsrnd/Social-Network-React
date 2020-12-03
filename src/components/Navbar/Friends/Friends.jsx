import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

function Friends(props) {
  const friendsElements = props.friends.map(friend => <Friend name={friend.name} ava={friend.ava} />);

  return (
    <div>
      <h2>Friends</h2>
      <div className={s.friends}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends