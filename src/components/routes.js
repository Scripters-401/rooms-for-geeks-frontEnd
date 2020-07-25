import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import AboutUs from '../aboutUs/about-us';

import Login from './auth/login/login.js';
import Signup from './auth/signup/signup.js';
import Initial from './initial.js';
import Homemain from './home/home';
import Auth from './auth/auth.js';
import User from './userPage/userPage';
import Oauth from './oauth.js';
import AllUsers from './allUsers/users';
import InterviewReviewForm from './interviewReview/interviewReview';
import AllInterviewR from './interviewReview/getInterview';
import QAForm from './QA/postQA';
// import UserForm from './userPage/userForm';

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
                {/* <UserForm /> */}
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
            <Route path="/mm" exact>
                <Oauth />
                <Auth capability="read">
                    <Redirect to="/rooms" />
                </Auth>
            </Route>
            <Route path="/users" exact>
                <AllUsers />
            </Route>
            <Route path="/interview" exact>
                <AllInterviewR />
                <InterviewReviewForm />
            </Route>
            <Route path="/QA" exact>
                <QAForm />
            </Route>

        </>
    )
}

export default Routes;