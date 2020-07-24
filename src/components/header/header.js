import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../auth/auth';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer.js'
// import Show from '../auth/show';

import '../../reset.css';

import './header.scss';
import logo from '../../assest/roomforGeeks22.png';

const Header = props => {
  return (
    <header>
      <Auth capability="read">
        {/* <Show condition={props.sign.loggedIn}> */}
          <NavLink to="/" >
            <button className="signout" onClick={props.logout}>Logout</button>
          </NavLink>
        {/* </Show> */}
      </Auth>

      <div className="header">
        <h1 className="H1">Rooms For Geeks</h1>
        <img className="logo" src={logo} alt='LOGO' />
      </div>
      {/* <Auth capability="read"> */}
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
      {/* </Auth> */}
    </header>
  );
}

const mapStateToProps = state => ({
  sign: state.sign
});

const mapDispatchToProps = (dispatch, getState) => ({
  // handleChange: (e) => dispatch(actions.handleChange(e)),
  // login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logoutFun()),
  // validateToken: token => dispatch(actions.validateToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;