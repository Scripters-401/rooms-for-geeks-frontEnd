import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header>
      <h1>Rooms For Geeks</h1>
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
    </header>
  );
}

export default Header;