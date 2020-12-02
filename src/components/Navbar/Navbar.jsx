import React from 'react';
import { NavLink } from 'react-router-dom';
import {StoreContext} from '../../storeContext';
import Friends from './Friends/friends';
import s from './Navbar.module.css';

const Navbar = () => {
  return <StoreContext.Consumer>
          {
            store => {    
              return (
                      <nav className={s.nav}>
                        <div className={`${s.item} ${s.active}`}>
                          <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                        </div>
                        <div className={s.item}>
                          <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                        </div>
                        <div className={s.item}>
                          <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                        </div>
                        <div className={s.item}>
                          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                        </div>
                        <div className={s.item}>
                          <NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink>
                        </div>
                        <div className={s.item}>
                          <Friends friends={store.getState().sidebar.friends}/>
                        </div>
                      </nav>
            )
            }
          }
        </StoreContext.Consumer>
}

export default Navbar;