import React from 'react';
import s from './../Friends.module.css';

function Friend(props) {
  return (
    <div className={s.friend}>
      <img src={window.location.origin + `/image/${props.ava}`} alt="ava" />
      <div>{props.name}</div>
    </div>
  )
}

export default Friend;