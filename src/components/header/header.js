import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer.js'
import Show from '../auth/show';
import '../../reset.css';

import './header.scss';
import { HashLink as Link2 } from 'react-router-hash-link';
import logo from '../../assest/roomforGeeks22.png';

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

            <Show condition={props.sign.loggedIn}>
              <li className='liHeader'>
                <NavLink to="/user-page" className="navHeader">User Page</NavLink>
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
  logout: () => dispatch(actions.logoutFun()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);