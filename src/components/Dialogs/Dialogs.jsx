import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  return (      
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1" acitveClassName="active">
            Dimich
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
        <NavLink to="/dialogs/2" acitveClassName="active">
          Andrey
        </NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/3" acitveClassName="active">
          Sveta
        </NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/4" acitveClassName="active">
          Sasha
        </NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/5" acitveClassName="active">
          Viktor
        </NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/6" acitveClassName="active">
          Valera
        </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs;