import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import InterviewReview from '../interviewReview/interviewReview';
// import AboutUs from '../aboutUs/about-us';

const Routes = () => {
    return (
        <main>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/rooms" exact>
                {/* <Rooms /> */}
            </Route>
            <Route path="/interviewReview" exact>
                {/* <InterviewReview /> */}
            </Route>
            <Route path="/about-us" exact>
                {/* <AboutUs /> */}
            </Route>
        </main>
    )
}

export default Routes;