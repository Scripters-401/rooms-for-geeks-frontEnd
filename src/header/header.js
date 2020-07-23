import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../auth/auth';
import '../reset.css';

import './header.scss';
import logo from '../assest/roomforGeeks22.png';

const Header = () => {
  return (
    <header>
      <div className="header">
      <h1 className="H1">Rooms For Geeks</h1>
      <img className="logo" src={logo} alt='LOGO' />
      </div>
      <Auth capability="read">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/rooms" /* activeClassName="rooms" */>Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/interviewReview" /* activeClassName="interviewReview" */>Interview Review</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" /* activeClassName="about-us" */>About Us</NavLink>
          </li>
        </ul>
      </nav>
      </Auth>
    </header>
  );
}

export default Header;