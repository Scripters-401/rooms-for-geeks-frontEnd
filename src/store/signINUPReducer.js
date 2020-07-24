import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const API = 'https://rooms-for-geeks.herokuapp.com';
// const API = 'http://localhost:4000';


let initialState = {
  loggedIn: false,
  login: '',
  logout: '',
  signup: '',
  user: {}
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

    default:
      return state;
  }
}

/*************************************************** actions ****************************************************** */  
export const handleChange = e => {
  return {
    type: 'handleChange',
    payload: { name: [e.target.name], value: e.target.value },
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



/*************************************************** functions ****************************************************** */  

export const signup = (username, password, email, role, name, major) => async dispatch => {

  try {
    const results = await fetch(`${API}/signup`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, role, name, major })
    });

    let res = await results.json();
    dispatch(validateToken(res.token))

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
    console.log(headers);
    let res = await results.json();
    console.log(res);
    dispatch(validateToken(res.token))
  } catch (error) {
    console.error(`ERROR: SIGNIN`);
  }
}

export const logoutFun = () => async dispatch => {
  try {
    await fetch(`${API}/signout`, {
      method: 'GET',
      mode: 'cors',
    });
    dispatch(logout())
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
