import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import AboutUs from '../aboutUs/about-us';

import Room from './room.js';
import Homemain from './home/home';
import Auth from './auth/auth.js';
import User from './userPage/userPage';
import Oauth from './oauth.js';
import AllUsers from './allUsers/users';
import InterviewReviewForm from './interviewReview/interviewReview';
import AllInterviewR from './interviewReview/getInterview';
import QAForm from './QA/postQA';
// import UserForm from './userPage/userForm';
import LoginForm from './signinForm/form';
import OverView from './overView/overView';
import RoomForm from './rooms/postRoom';
import CorseForm from './course/postCourse';
import UserHome from './userHome/userHome'

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
            <Route path="/room" exact>
                <RoomForm />
            </Route>
            <Route path="/course" exact>
                <CorseForm />
            </Route>
            <Route path="/userHome" exact>
                <UserHome />
            </Route>

        </>
    )
}

export default Routes;