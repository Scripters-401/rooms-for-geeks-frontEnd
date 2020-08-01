require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
  putReview: '',
//   pushId: '',
};


export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

    case 'ADD_REVIEW':
      state[payload.name] = payload.value
      return { ...state };
    // case 'GET_ID':
    //   state.pushId = state.
    default:
      return state;
  }
}

export const updateReview = e => {
  return {
      type: 'ADD_REVIEW',
      payload: { name: [e.target.name], value: e.target.value },
  }
}

export const putReview = (token, id, review) => async dispatch => {
  console.log('jjjjjj', token, id, review);
  try {
      let theApi = `${API}/interviewReview/${id}`;
      let results = await fetch(theApi, {
          method: 'PUT',
          mode: 'cors',
          headers: new Headers({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }),
          body: JSON.stringify({ review })
      })
      let res = await results.json();
      console.log('llll', res);
      dispatch(reviewAction(res))
  } catch (error) {
      console.error(`ERROR: PUT_REVIEW`);
  }
}

const reviewAction = payloadData => {
  return {
      type: 'ADD_REVIEW',
      payload: payloadData
  }
}