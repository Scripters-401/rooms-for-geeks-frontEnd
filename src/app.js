import React from 'react';

import Header from './header/header.js';
import Footer from './footer/footer.js';
// import Auth from './auth/auth.js';
import Login from './auth/login/login.js';
import Signup from './auth/signup/signup.js';
import LoginContext from './auth/context.js';
import Initial from './components/initial.js';
import './app.scss';

function App() {
  return (
    <>
    <LoginContext>
      <hr />
      <Login />
      <Signup />
      {/* <Auth capability="read"> */}
        <Header />
          <Initial />
        <Footer />
      {/* </Auth> */}
    </LoginContext>
    </>
  );
}

export default App;