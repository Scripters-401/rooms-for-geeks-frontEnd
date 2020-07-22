import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
// import Rooms from '../rooms/rooms';
// import InterviewReview from '../interviewReview/interviewReview';

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
                {/* <interviewReview /> */}
            </Route>
        </main>
    )
}

export default Routes;