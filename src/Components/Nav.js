import React from 'react';
import Account from './Account';
import classes from '../Style/Nav.module.css';
import logo from '../Assets/Images/logo.png';

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="quiz application" />
              <h3>Quiz Application</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    );
};

export default Nav;