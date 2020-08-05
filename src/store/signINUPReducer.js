import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// require('dotenv').config();

// localhost or deployed
const API = process.env.REACT_APP_API;

let initialState = {
  loggedIn: false,
  login: '',
  logout: '',
  signup: '',
  user: {},
  authURL: '',
  errorMsg: '',
  errorMsgSignUP: '',
  overView: 1,
  loaderState: false,
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'setLoginState':
      cookie.save('auth', payload.token);
      
      state.loggedIn = payload.loggedIn;
      state.token = payload.token;
      state.user = payload.user;
      return { ...state };

    case 'handleChange':
      state[payload.name] = payload.value
      return { ...state };

    case 'oath':
      state.authURL = payload
      return { ...state };

    case 'ERROR':
      state.errorMsg = payload;
      return { ...state };

    case 'ERROR-SIGN-UP':
      state.errorMsgSignUP = payload;
      return { ...state };

    case 'update-overView':
      state.overView = payload;
      return { ...state };

    case 'updateLoader':
      state.loaderState = payload;
      return { ...state };

    default:
      return state;
  }
}

/*************************************************** actions ****************************************************** */
export const updateOverView = e => {
  return {
    type: 'update-overView',
    payload: e,
  }
}

export const updateLoader = e => {
  return {
    type: 'updateLoader',
    payload: e,
  }
}


export const handleChange = e => {
  return {
    type: 'handleChange',
    payload: { name: [e.target.name], value: e.target.value },
  }
}

export const oathfun = e => {
  return {
    type: 'oath',
    payload: e,
  }
}




const setLoginState = (loggedIn, token, user) => {
  return {
    type: 'setLoginState',
    payload: { loggedIn, token, user },
  }
}

const logout = (loggedIn = false, token = null, user = {}) => {
  return {
    type: 'setLoginState',
    payload: { loggedIn, token, user, },
  }
}

const errMsg = (payload) => {
  return {
    type: 'ERROR',
    payload: payload
  }
}

const errMsgSignUp = (payload) => {
  return {
    type: 'ERROR-SIGN-UP',
    payload: payload
  }
}



/*************************************************** functions ****************************************************** */

export const signup = (username, password, email, name, major, profileIMG) => async dispatch => {
  try {
    const results = await fetch(`${API}/signup`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, name, major, profileIMG })
    });

    let res = await results.json();
    if (res.err) {
      dispatch(errMsgSignUp(res.err));
    } else {
      dispatch(validateToken(res.token))
    }
  } catch (error) {
    console.error(`ERROR: SIGNUP`);
  }
}

export const login = (username, password) => async dispatch => {
  try {
    const results = await fetch(`${API}/signin`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    });

    let headers = {};
    for (let [key, value] of results.headers) {
      headers[key] = value;
    }
    let res = await results.json();
    if (res.err) {
      dispatch(errMsg(res.err));
    } else {
      dispatch(validateToken(res.token))
    }
  } catch (error) {
    console.error(`ERROR: SIGNIN`);
  }
}

export const logoutFun = () => async dispatch => {
  try {
    dispatch(logout())
    cookie.save('notification','false');
    fetch(`${API}/signout`, {
      method: 'GET',
      mode: 'cors',
    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const validateToken = token => dispatch => {
  try {
    let user = jwt.verify(token, process.env.REACT_APP_SECRET);
    dispatch(setLoginState(true, token, user))
  } catch (ex) {
    logout();
  }
}



export const getOauth = () => async dispatch => {
  try {
    let results = await fetch(`${API}/nn`, {
      method: 'GET',
      mode: 'cors',
    });

    let res = await results.json();
    dispatch(validateToken(res.token))
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}
