import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import sign from './signINUPReducer';
import userInfo from './userReducer';
import allUsers from './allUseres';
import interviewR from './interviewReviewReducer';
import allInterview from './getInterviewReducer';
import theQA from './QAReducer';
import editUserInfo from './putUserInfo';
import room from './roomReducer';
import thePostRoom from './postRoomReduser';
import thePostCourse from './postCourseReducer';
import thunk from 'redux-thunk';
import userHome from './userHome';
import newPass from './forgotPassReducer';


import upload from './uploadImageReducer'
let reducers = combineReducers({
    data: reducer,
    sign,
    userInfo,
    allUsers,
    interviewR,
    allInterview,
    theQA,
    editUserInfo,
    room,
    thePostRoom,
    thePostCourse,
    userHome,
    upload,
    newPass,
    
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();