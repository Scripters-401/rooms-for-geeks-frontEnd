import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../auth/auth';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer.js'
// import Show from '../auth/show';
//#4a9998
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

      <nav className='allNavHeader'>
        <ul className='ulHeader'>
          <li className='liHeader'>
            <Link to="/" className="navHeader">Home</Link>
          </li>
          <li className='liHeader'>
            <NavLink to="/rooms"  className="navHeader">Rooms</NavLink>
          </li>
          <li className='liHeader'>
            <NavLink to="/interviewReview" className="navHeader">Interview Review</NavLink>
          </li>
          <li className='liHeader'>
            <NavLink to="/about-us" className="navHeader">About Us</NavLink>
          </li>
            <li className='liHeader'>
          <NavLink to="/sign" className="navHeader" >signIn</NavLink>
            </li>
        </ul>
      </nav>

        <h1 className="H1">Rooms For Geeks</h1>
        <img className="logo" src={logo} alt='LOGO' />
     
      {/* <Auth capability="read"> */}
     
      </div>
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