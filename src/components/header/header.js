import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HashLink as Link2 } from 'react-router-hash-link';

import * as actions from '../../store/signINUPReducer.js'
import * as actions2 from '../../store/userReducer.js'

import Show from '../auth/show';
import logo from '../../assest/webHeaderLogoFinal.png';
import '../../reset.css';
import './header.scss';
const Header = props => {
  useEffect(() => {
    props.getInfoUser(props.sign.token, props.sign.user.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.sign.loggedIn])
  const disconnectSocket = e => {
    if (props.room.socket) {
      props.room.socket.disconnect();
    }

  }
  return (
    <header onClick={(e) => disconnectSocket(e)} id='AppHeader'>
      <div className="header">
        <nav className='allNavHeader'>
          <ul className='ulHeader'>
            <li className='liHeader'>

              <Show condition={!props.sign.loggedIn}>

                <Link to="/" className="navHeader">Home</Link>

              </Show>

              <Show condition={props.sign.loggedIn}>

                <Link to="/user-Home" className="navHeader">Home</Link>
              </Show>



            </li>
            <Show condition={props.sign.loggedIn}>
              <li className='liHeader'>
                <NavLink to="/interview" className="navHeader">Interview Review</NavLink>
              </li>
            </Show>

            <Show condition={!props.sign.loggedIn}>
              <li className='liHeader'>
                <Link2 smooth to="/#about-us" className="navHeader">About Us</Link2>
              </li>
            </Show>


            <li className='liHeader'>
              <Show condition={props.sign.loggedIn}>

                <a href="/" className="navHeader" onClick={props.logout}>
                  Logout
                </a>
              </Show>

              <Show condition={!props.sign.loggedIn}>
                <Link2 smooth to="/#sign" className="navHeader">signIn</Link2>
              </Show>
            </li>


            <Show condition={props.sign.loggedIn}>
              <li className='liHeader'>
                <NavLink to="/user-page" className="navHeader2">
                  <img id='profileheader' src={props.userInfo.user.profileIMG} alt='profile' />

                </NavLink>
              </li>
            </Show>



          </ul>
        </nav>
        <Link to="/" >

          <img className="logo" src={logo} alt='LOGO' />
        </Link>
      </div>
    </header >
  );
}

const mapStateToProps = state => ({
  sign: state.sign,
  userInfo: state.userInfo,
  room: state.room,

});
const mapDispatchToProps = (dispatch, getState) => ({
  logout: () => dispatch(actions.logoutFun()),
  getInfoUser: (token, id) => dispatch(actions2.getInfoUser(token, id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);