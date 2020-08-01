import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import Quiz from './room/answerQuiz'
import ConfirmEmail from './forgotPass/confirmEmail';
import PostQuiz from './createquiz/postQuiz'

const Routes = () => {

    return (
        <>
            <Route path="/" exact>
                <Homemain />
                <OverView />
                <Auth capability="read">
                    <Redirect to="/user-Home" />
                </Auth>
                <LoginForm />
                <AboutUs />
            </Route>
            <Route path="/room" exact>
                <Auth capability="read">
                    <Room />
                </Auth>
            </Route>

            <Route path="/user-page" exact>
                <User />
            </Route>

            <Route path="/sign" exact>
                <Auth capability="read">
                    <Redirect to="/user-Home" />
                </Auth>
            </Route>

            <Route path="/mm" exact>
                <Oauth />
                <Auth capability="read">
                    <Redirect to="/user-Home" />
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
            <Route path="/create-room" exact>
                <RoomForm />
            </Route>
            <Route path="/course" exact>
                <CorseForm />
            </Route>
            <Route path="/user-Home" exact>
                <UserHome />
            </Route>

            <Route path="/new-password" exact>
                <ForgotPass />
            </Route>
            <Route path="/take-quiz" exact>
                <Quiz />
            </Route>


            <Route path="/request-password" exact>
                <ConfirmEmail />
            </Route>
            <Route path="/create-quiz" exact>
                <PostQuiz />
            </Route>
        </>
    )
}

export default Routes;