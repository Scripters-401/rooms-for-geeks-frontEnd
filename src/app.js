/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Routes from './components/routes';

// import Homemain from './home/home';
// import Auth from './components/auth/auth.js';
// import Login from './auth/login/login.js';
// import Signup from './auth/signup/signup.js';
// import Initial from './components/initial.js';
import * as actions from './store/signINUPReducer.js'

import './reset.css';
import './app.scss';


function App(props) {
  useEffect(()=>{
    const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        props.validateToken(token);
  },[])
  return (
    <>
      {/* <Auth capability="read"> */}
        <Header />
      {/* </Auth> */}
      <Routes />
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  sign: state.sign
});
const mapDispatchToProps = (dispatch, getState) => ({
  // handleChange: (e) => dispatch(actions.handleChange(e)),
  // login: (username, password) => dispatch(actions.login(username, password)),
  // logout: () => dispatch(actions.logoutFun()),
  validateToken: token => dispatch(actions.validateToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;