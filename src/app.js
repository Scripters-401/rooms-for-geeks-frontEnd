import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Routes from './components/routes';

// import Homemain from './home/home';
// import Auth from './components/auth/auth.js';
// import Login from './auth/login/login.js';
// import Signup from './auth/signup/signup.js';
// import Initial from './components/initial.js';

import './reset.css';
import './app.scss';


function App() {
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

export default App;