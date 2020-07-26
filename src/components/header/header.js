import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Auth from '../auth/auth';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer.js'
import Show from '../auth/show';
//#4a9998
import '../../reset.css';

import './header.scss';
import logo from '../../assest/Room-forGeeksLogonew7.png';
import { HashLink as Link2 } from 'react-router-hash-link';
const Header = props => {
  return (
    <header id='AppHeader'>
      <div className="header">
        <nav className='allNavHeader'>
          <ul className='ulHeader'>
            <li className='liHeader'>
              <Link to="/" className="navHeader">Home</Link>
            </li>
            <Show condition={props.sign.loggedIn}>
              <li className='liHeader'>
                <NavLink to="/rooms" className="navHeader">Rooms</NavLink>
              </li>
            </Show>

            <Show condition={props.sign.loggedIn}>
              <li className='liHeader'>
                <NavLink to="/interviewReview" className="navHeader">Interview Review</NavLink>
              </li>
            </Show>

            <Show condition={!props.sign.loggedIn}>
              <li className='liHeader'>
                <Link2 smooth to="/#aboutus" className="navHeader">About Us</Link2>
              </li>
            </Show>

            <li className='liHeader'>
              <Show condition={props.sign.loggedIn}>
                <NavLink to="/" className="navHeader" onClick={props.logout}>
                  Logout
                </NavLink>
              </Show>

              <Show condition={!props.sign.loggedIn}>
                <Link2 smooth to="/#sign" className="navHeader">signIn</Link2>
              </Show>

            </li>
          </ul>
        </nav>
        <h1 className="H1">Rooms For Geeks</h1>
        <img className="logo" src={logo} alt='LOGO' />
      </div>
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