import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import InterviewReview from '../interviewReview/interviewReview';
// import AboutUs from '../aboutUs/about-us';
import Login from '../auth/login/login.js';
import Signup from '../auth/signup/signup.js';
import Initial from '../components/initial.js';
import Homemain from '../home/home';
import Auth from '../auth/auth.js';
const Routes = () => {
    return (
        <main>
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
            <Route path="/about-us" exact>
                {/* <AboutUs /> */}
            </Route>

            <Route path="/sign" exact>
                {/* <Redirect/> */}
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
                <Login />
                <Signup />
            </Route>

        </main>
    )
}

export default Routes;