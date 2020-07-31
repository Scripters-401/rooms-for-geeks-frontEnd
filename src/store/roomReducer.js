
// localhost or deployed
const API = process.env.REACT_APP_API;


let initialState = {
  roomData: { RData: { roomName: '' } },
  score: null,
  socket: null,
  favOrNot: false,
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'roomDataAction':
      state.roomData = payload
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

export const addAnswer = (token, questionId, answers, userid, name) => async dispatch => {
  try {
    fetch(`${API}/A/${questionId}`, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ answers, userid, name })
    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const addToFav = (token, userid, roomID) => async dispatch => {
  try {
    fetch(`${API}/favourite/${userid}`, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ favRooms: roomID })
    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const removefromFav = (token, userid, roomID) => async dispatch => {
  try {
    fetch(`${API}/favourite/${userid}/${roomID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const deleteRoom = (token, name, userid, roomID, courseID) => async dispatch => {
  try {
    let result = await fetch(`${API}/room/${roomID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ name })

    });
    let res = result.json();
    console.log(res);
    // fetch(`${API}/course/${courseID}`, {
    //   method: 'DELETE',
    //   mode: 'cors',
    //   headers: new Headers({
    //     'Authorization': `Beare ${token}`,
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   }),
    //   body: JSON.stringify({ userid })

    // });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}