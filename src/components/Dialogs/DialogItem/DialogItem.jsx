import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
        <img src={window.location.origin + `/image/${props.ava}`} alt='ava' /> {props.name}
      </NavLink>
    </div>
  )
};

export default DialogItem;