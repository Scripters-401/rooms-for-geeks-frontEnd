
require('dotenv').config();

// localhost or deployed
const API = process.env.REACT_APP_API;


let initialState = {
  roomData: { RData: { roomName: '' } },
  message: {},
  output: [],
  checkconnection: false,
  counter: 0,
  typingstate: '',
  notification: '',
  score: '',
  socket:null
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'roomDataAction':
      state.roomData = payload
      return { ...state };

    case 'message':
      state[payload.name] = payload.value
      return { ...state };

    case 'updateOutput':
      state.output = [...state.output, payload]
      return { ...state };

    case 'resetOutput':
      state.output = []
      return { ...state };

    case 'updateCounter':
      state.counter = payload
      return { ...state };

    case 'updateTyping':
      state.typingstate = payload
      return { ...state };

    case 'updateNotifications':
      state.notification = payload
      return { ...state };

    case 'updateScore':
      state.score = payload
      return { ...state };



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

export const message = e => {
  return {
    type: 'message',
    payload: { name: [e.target.name], value: e.target.value },
  }
}


export const updateOutput = e => {
  return {
    type: 'updateOutput',
    payload: e,
  }
}


export const resetOutput = e => {
  return {
    type: 'resetOutput',
    payload: e,
  }
}

export const updateCounter = e => {
  return {
    type: 'updateCounter',
    payload: e,
  }
}

export const updateTyping = e => {
  return {
    type: 'updateTyping',
    payload: e,
  }
}

export const updateNotifications = e => {
  return {
    type: 'updateNotifications',
    payload: e,
  }
}

export const updateScore = e => {
  return {
    type: 'updateScore',
    payload: e.score,
  }
}



/*************************************************** functions ****************************************************** */
export const getRoom = (token, id) => async dispatch => {
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


export const postAnswers = (token, answers, quizID, userID) => async dispatch => {
  try {
    let results = await fetch(`${API}/score/${userID}`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({ answers, quizID, userID })

    });

    let res = await results.json();
    dispatch(updateScore(res))

  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}
