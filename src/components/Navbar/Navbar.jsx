import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (      
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="#root">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#root">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#root">News</a>
      </div>
      <div className={s.item}>
        <a href="#root">Music</a>
      </div>
      <div className={s.item}>
        <a href="#root">Setting</a>
      </div>
    </nav>
  )
}

export default Navbar;