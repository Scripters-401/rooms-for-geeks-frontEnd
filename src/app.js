/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { HashLink as Link2 } from 'react-router-hash-link';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Routes from './components/routes';

import * as actions from './store/signINUPReducer.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp as upIcon } from '@fortawesome/free-solid-svg-icons';
import './reset.css';
import './app.scss';
require('dotenv').config();


function App(props) {

  useEffect(() => {
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    props.validateToken(token);
  }, [])

  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <Link2 smooth to="/#AppHeader" className="up">
        <FontAwesomeIcon icon={upIcon} size='1x' color="#7DA09A" />
      </Link2>
    </>
  );
}

const mapStateToProps = state => ({
  sign: state.sign
});
const mapDispatchToProps = (dispatch, getState) => ({
  validateToken: token => dispatch(actions.validateToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
