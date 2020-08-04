
// localhost or deployed
const API = process.env.REACT_APP_API;


let initialState = {
  roomData: { RData: { roomName: '' } },
  score: null,
  socket: null,
  favOrNot: false,
  redirectAfterDelete: false,
  roomAdmin: false,
  adminName: '',
  choosenRoomIDSocket: '',
  finishQuiz: false,
  questionIndex: '',
  scroll: false
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'roomDataAction':
      state.roomData = payload
      state.adminName = state.roomData.RData.cookieAdminName ? state.roomData.RData.cookieAdminName : state.roomData.RData.adminName;
      return { ...state };

    case 'updateScore':
      state.score = payload
      return { ...state };

    case 'updateRoomAdminBool':
      // console.log(payload,state.adminName,'llllllllllllllllllllllllllllll');
      state.roomAdmin = (payload === state.adminName)
      // console.log( '................',state.roomAdmin , payload === state.adminName,payload , state.adminName);
      return { ...state };


    case 'addQuestion':
      state.roomData.QAData = [...state.roomData.QAData, payload]
      return { ...state };

    case 'updateChoosenRoomIDSocket':
      state.choosenRoomIDSocket = payload
      return { ...state };

    case 'updatefinishQuiz':
      state.redirectTakeQuiz = payload.redirectTakeQuiz
      state.finishQuiz = payload.finishQuiz
      return { ...state };

    case 'updateFavOrNot':
      state.favOrNot = payload
      return { ...state };

    case 'updateChatScroll':
      state.scroll = payload
      return { ...state };




    default:
      return state;
  }
}

/*************************************************** actions ****************************************************** */

export const updateChatScroll = (scroll) => {
  return {
    type: 'updateChatScroll',
    payload: scroll,
  }
}


export const updatefinishQuiz = (finishQuiz, redirectTakeQuiz) => {
  return {
    type: 'updatefinishQuiz',
    payload: { finishQuiz, redirectTakeQuiz },
  }
}

export const updateFavOrNot = (bool) => {
  return {
    type: 'updateFavOrNot',
    payload: bool,
  }
}

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

export const updateRoomAdminBool = id => {
  // console.log(id,'kkkkkkkkkkkkkk');
  return {
    type: 'updateRoomAdminBool',
    payload: id,
  }
}

export const addQuestion = question => {
  return {
    type: 'addQuestion',
    payload: question,
  }
}


export const updateChoosenRoomIDSocket = e => {
  return {
    type: 'updateChoosenRoomIDSocket',
    payload: e,
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

export const askQuestion = (token, question, courseID, name, userid, profileIMG) => async dispatch => {
  try {
    let results = await fetch(`${API}/QA`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({ question, courseID, name, userid, profileIMG })

    });

    let res = await results.json();
    dispatch(addQuestion(res))

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
    fetch(`${API}/room/${roomID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ name })

    });

    fetch(`${API}/course/${courseID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ userid })

    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const deleteQuestion = (token, questionID, userid) => async dispatch => {
  try {
    fetch(`${API}/QA/${questionID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ userid })

    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}

export const deleteAnswer = (token, userid, questionID, answerIndex) => async dispatch => {
  try {
    fetch(`${API}/A/${questionID}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: new Headers({
        'Authorization': `Beare ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      body: JSON.stringify({ userid, answerIndex })

    });
  } catch (error) {
    console.error(`ERROR: SIGNOUT`);
  }
}