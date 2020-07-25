// import cookie from 'react-cookies';
// import jwt from 'jsonwebtoken';

require('dotenv').config();

// const API = 'https://rooms-for-geeks.herokuapp.com';
// const API = 'http://localhost:4000';
const API = process.env.REACT_APP_API;


let initialState = {
  roomData:{RData:{roomName:''}},
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'roomDataAction':
      console.log(payload,'ppppppppppppppp');   
      state.roomData = payload
      return { ...state };

    // case 'handleChange':
    //   state[payload.name] = payload.value
    //   return { ...state };

    // case 'oath':
    //   state.authURL = payload
    //   return { ...state };

    default:
      return state;
  }
}

/*************************************************** actions ****************************************************** */
export const roomData = payload => {
  return {
    type: 'roomDataAction',
    payload: payload,
  }
}

// export const post = e => {
//   return {
//     type: 'oath',
//     payload: e,
//   }
// }


// const setLoginState = (loggedIn, token, user) => {
//   return {
//     type: 'setLoginState',
//     payload: { loggedIn, token, user },
//   }
// }

// const logout = (loggedIn = false, token = null, user = {}) => {
//   return {
//     type: 'setLoginState',
//     payload: { loggedIn, token, user, },
//   }
// }



/*************************************************** functions ****************************************************** */

export const createRoom = (username, password) => async dispatch => {
  // try {
  //   const results = await fetch(`${API}/signin`, {
  //     method: 'POST',
  //     mode: 'cors',
  //     credentials: 'same-origin',
  //     headers: new Headers({
  //       'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }),
  //   });
  //   let headers = {};
  //   for (let [key, value] of results.headers) {
  //     headers[key] = value;
  //   }
  //   // console.log(headers);
  //   let res = await results.json();
  //   dispatch(validateToken(res.token))
  // } catch (error) {
  //   console.error(`ERROR: SIGNIN`);
  // }
}

export const getRoom = (token,id) => async dispatch => {
  try {
    let results = await fetch(`${API}/room/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    });

    let res = await results.json();
    dispatch(roomData(res))
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

// export const validateToken = token => dispatch => {
//   try {
//     let user = jwt.verify(token, process.env.REACT_APP_SECRET);
//     dispatch(setLoginState(true, token, user))
//   } catch (ex) {
//     logout();
//   }
// }
