import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import InterviewReview from '../interviewReview/interviewReview';
// import AboutUs from '../aboutUs/about-us';

import Room from './room.js';
import Homemain from './home/home';
import Auth from './auth/auth.js';
import Oauth from './oauth.js';
import LoginForm from './signinForm/form'
import OverView from './overView/overView'


const Routes = () => {
    return (
        <>
            <Route path="/" exact>
                <Homemain />
                <OverView />
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
                <LoginForm />
            </Route>
            <Route path="/rooms" exact>
                <Auth capability="read">
                    <Room />
                </Auth>
                {/* <Rooms /> */}
            </Route>
            <Route path="/interviewReview" exact>
                {/* <InterviewReview /> */}
            </Route>
            <Route path="/about-us" exact>
                {/* <AboutUs /> */}
                <div>abouuuuuuut us</div>
            </Route>

            <Route path="/sign" exact>
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
            </Route>

            <Route path="/mm" exact>
                <Oauth />
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
            </Route>

        </>
    )
}

export default Routes;