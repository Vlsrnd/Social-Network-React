import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
        <img src={window.location.origin + `/image/${props.ava}`} alt='ava' /> {props.name}
      </NavLink>
    </div>
  )
};

export default DialogItem;