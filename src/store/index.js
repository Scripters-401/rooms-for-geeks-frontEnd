import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import sign from './signINUPReducer';
import userInfo from './userReducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    data: reducer,
    sign,
    userInfo
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();