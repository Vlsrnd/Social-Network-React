import React from 'react';
import styles from './../Friends.module.css';

function Friend(props) {
  return (
    <div className={styles.friend}>
      <img src={window.location.origin + `/image/${props.ava}`} alt="ava" />
      <div>{props.name}</div>
    </div>
  )
}

export default Friend;