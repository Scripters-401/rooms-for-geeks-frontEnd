import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Home from '../home/home';
// import Rooms from '../rooms/rooms';
import AboutUs from './aboutUs/about-us';

import Room from './room/room.js';
import Homemain from './home/home';
import Auth from './auth/auth.js';
import User from './userPage/userPage';
import Oauth from './oauth.js';
import AllUsers from './allUsers/users';
import AllInterviewR from './interviewReview/interviewReview';
import QAForm from './QA/postQA';
import LoginForm from './signinForm/form';
import OverView from './overView/overView';
import RoomForm from './rooms/postRoom';
import CorseForm from './course/postCourse';
import UserHome from './userHome/userHome';
import ForgotPass from './forgotPass/forgotPass';

const Routes = () => {
    return (
        <>
            <Route path="/" exact>
                <Homemain />
                <OverView />
                <Auth capability="read">
                    <Redirect to="/user-page" />
                </Auth>
                <LoginForm />
                <AboutUs />
            </Route>
            <Route path="/rooms" exact>
                <Auth capability="read">
                    <Room />
                </Auth>
                {/* <Rooms /> */}
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
                    <Redirect to="/user-page" />
                </Auth>
            </Route>

            <Route path="/mm" exact>
                <Oauth />
                <Auth capability="read">
                    <Redirect to="/user-page" />
                </Auth>
            </Route>
            <Route path="/users" exact>
                <AllUsers />
            </Route>
            <Route path="/interview" exact>
                <AllInterviewR />
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

            <Route path="/new-password" exact>
                <ForgotPass />
            </Route>
        </>
    )
}

export default Routes;