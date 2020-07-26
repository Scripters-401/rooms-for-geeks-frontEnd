
require('dotenv').config();

// const [image, setImage] = useState(null);
// const [url, setUrl] = useState("");
// const [progress, setProgress] = useState(0);



let initialState = {
  image: null,
  url: '',
  progress: 0,
};

// reducer : switch case
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'setImage':
      state.image = payload
      return { ...state };

    case 'setProgress':
      state.progress = payload
      return { ...state };

    case 'setUrl':
      state.url = payload
      return { ...state };

    default:
      return state;
  }
}

/*************************************************** actions ****************************************************** */
export const setImage = payload => {
  return {
    type: 'setImage',
    payload: payload,
  }
}

export const setProgress = payload => {
  return {
    type: 'setProgress',
    payload: payload,
  }
}

export const setUrl = payload => {
  return {
    type: 'setProgress',
    payload: payload,
  }
}


/*************************************************** functions ****************************************************** */

// export const signup = (username, password, email, name, major) => async dispatch => {

//   try {
//     const results = await fetch(`${API}/signup`, {
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password, email, name, major })
//     });

//     let res = await results.json();
//     dispatch(validateToken(res.token))

//   } catch (error) {
//     console.error(`ERROR: SIGNUP`);
//   }
// }


