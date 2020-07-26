require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    interView: '',
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE':
            state[payload.name] = payload.value
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


export const interviewPost = (token, companyName, review, date, rate, anonymous, position) => async dispatch => {

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
        body: JSON.stringify({ companyName, review, date, rate, anonymous, position })
      });
  
    //   let res = 
      await results.json();
    //   dispatch(postInterview(res))
  
    } catch (error) {
      console.error(`ERROR: INTERVIEW_REVIEW`);
    }
  }