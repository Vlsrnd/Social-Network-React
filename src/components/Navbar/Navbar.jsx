import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/setting" activeClassName={styles.activeLink}>Setting</NavLink>
      </div>
      <div className={styles.item}>
        <FriendsContainer />
      </div>
    </nav>
  )
}



export default Navbar;