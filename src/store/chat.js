
let initialState = {
  message: {},
  output: [],
  checkconnection: false,
  counter: 0,
  typingstate: '',
  notification: '',
  didLike: [],
  didHaHa: [],
  didLove:[],
  open: false,
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'message':
      state[payload.name] = payload.value
      return { ...state };

    case 'updateOutput':
      state.output = payload
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

    case 'openCloseChat':
      state.open = !state.open
      return { ...state };



    default:
      return state;
  }
}



export const openCloseChat = e => {
  return {
    type: 'openCloseChat',
    payload: e,
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
