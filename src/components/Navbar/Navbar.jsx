import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import styles from './Navbar.module.css';

const nav = [
  {link: '/profile', text: 'Profile'},
  {link: '/dialogs', text: 'Messages'},
  {link: '/news', text: 'News'},
  {link: '/music', text: 'Music'},
  {link: '/users', text: 'Users'},
  {link: '/settings', text: 'Settings'},
]

const NavLinkComponent = ({link, text}) => {
  return (
    <div className={styles.item}>
      <NavLink to={link} activeClassName={styles.activeLink}>{text}</NavLink>
    </div>
  )
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {nav.map(l => <NavLinkComponent link={l.link} text={l.text} key={`${l.link}${l.text}`} />)}
      <div className={styles.item}>
        <FriendsContainer />
      </div>
    </nav>
  )
}

export default Navbar;