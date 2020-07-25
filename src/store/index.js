import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import sign from './signINUPReducer';
import userInfo from './userReducer';
import allUsers from './allUseres';
import interviewR from './interviewReviewReducer';
import allInterview from './getInterviewReducer';
import theQA from './QAReducer';
// import editUserInfo from './putUserInfo';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    data: reducer,
    sign,
    userInfo,
    allUsers,
    interviewR,
    allInterview,
    theQA,
    // editUserInfo
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();