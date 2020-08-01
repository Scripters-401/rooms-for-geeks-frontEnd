require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
  interView: '',
  isAnonymous: true,
};


export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

    case 'HANDLE_CHANGE':
      state[payload.name] = payload.value
      return { ...state };
    case 'IS_ANONYMOUS':
      state.isAnonymous = payload;
      return { ...state };
    default:
      return state;
  }
}

export const handleChangeInterview = e => {
  return {
    type: 'HANDLE_CHANGE',
    payload: { name: [e.target.name], value: e.target.value },
  }
}

export const checkAnonymous = event => {
  return {
    type: 'IS_ANONYMOUS',
    payload: event
  }
}

export const interviewPost = (token, companyName, review, date, rate, anonymous, position, userName) => async dispatch => {
  try {
    const results = await fetch(`${API}/interviewReview`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({ companyName, review, date, rate, anonymous, position, userName })
    });

      let res = await results.json();
    // console.log('jjjjjjjkhjhu', res._id);
    //   dispatch(postInterview(res))

  } catch (error) {
    console.error(`ERROR: INTERVIEW_REVIEW`);
  }
}
