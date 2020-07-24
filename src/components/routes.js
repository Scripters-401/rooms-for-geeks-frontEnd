import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import InterviewReview from '../interviewReview/interviewReview';
// import AboutUs from '../aboutUs/about-us';

import Login from './auth/login/login.js';
import Signup from './auth/signup/signup.js';
import Initial from './initial.js';
import Homemain from './home/home';
import Auth from './auth/auth.js';
import User from './userPage/userPage';

const Routes = () => {
    return (
        <>
            <Route path="/" exact>
                <Homemain />
            </Route>
            <Route path="/rooms" exact>
                <Auth capability="read">
                    <Initial />
                </Auth> 
                {/* <Rooms /> */}
            </Route>
            <Route path="/interviewReview" exact> 
                {/* <InterviewReview /> */}
            </Route>
            <Route path="/user-page" exact>
                <User />
            </Route>
            <Route path="/about-us" exact>
                {/* <AboutUs /> */}
                <div>abouuuuuuut us</div>
            </Route>

            <Route path="/sign" exact>
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
                <Login />
                <Signup />
            </Route>

        </>
    )
}

export default Routes;