require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    user: [],
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'GET_INTERVIEW_REVIEW':
            state.user = payload.result;
            return { ...state };
        default:
            return state;
    }
}

export const actionInterviewreview = payloadData => {
    return {
        type: 'GET_INTERVIEW_REVIEW',
        payload: payloadData
    }
}


export const getInterviewreview = (token) => async dispatch => {
    try {
        let theApi = `${API}/interviewReview`;
        let results = await fetch(theApi, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        })
        let res = await results.json();
        dispatch(actionInterviewreview(res))
    } catch (error) {
        console.error(`ERROR: GET_INTERVIEW_REVIEW`);
    }
}
