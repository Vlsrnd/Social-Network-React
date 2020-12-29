import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (      
  <header className={styles.header}>
      {/* <img src="./logo192.png" alt="logo"></img> */}
      <div className={styles.loginBlock}>
      {
        props.isAuth ? 'yourName' : <NavLink to={'/login'}>Login</NavLink>
      }
      </div>
  </header>
  )
}

export default Header;