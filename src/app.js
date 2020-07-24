import React from 'react';

import Header from './header/header.js';
import Footer from './footer/footer.js';
// import Homemain from './home/home';
import Auth from './auth/auth.js';
// import Login from './auth/login/login.js';
// import Signup from './auth/signup/signup.js';
// import Initial from './components/initial.js';
import Routes from './routes/routes';

import './app.scss';


function App() {
  return (
    <>
      <Auth capability="read">
        <Header />
      </Auth>
      <Routes />
      <Footer />
    </>
  );
}

export default App;