// require('dotenv').config();
// const API = process.env.REACR_APP_API;
const API = 'http://localhost:4000';
let initialState = {
    output: [],
    questions: [],
    correctAnswer: [],
    wrongChoices: [],
    settings: {
        dots: true,
        autoplay: false,
        // arrow: false,
        nextButton: '',
        previousButton: ''
    }
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'HANDLE_ADD_QUIZ':
            let [z, idx] = payload.name.toString().split('#')
            state[z][idx] = payload.value
            return { ...state };

        case 'HANDLE_ADD_QUIZ_0':
            state[payload.name] = payload.value
            return { ...state };


        case 'updateOutput':
            state.output = [...state.output, payload]
            return { ...state };

        case 'updateSettings':
            state.settings = payload
            return { ...state };


        default:
            return state;
    }
}

export const handleAddQuiz = e => {
    return {
        type: 'HANDLE_ADD_QUIZ',
        payload: { name: [e.target.name], value: e.target.value },
    }
}

export const handleAddQuiz0 = e => {
    return {
        type: 'HANDLE_ADD_QUIZ_0',
        payload: { name: [e.target.name], value: e.target.value },
    }
}

export const updateOutput = e => {
    return {
        type: 'updateOutput',
        payload: e,
    }
}
export const updateSettings = e => {
    return {
        type: 'updateSettings',
        payload: e,
    }
}

export const quizPost = (token, quizName, discription, questions, correctAnswer, wrongChoices, courseID) => async dispatch => {
    try {
         await fetch(`${API}/quiz`, {
            method: 'POST',
            mode: 'cors',
            // cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ quizName, discription, questions, correctAnswer, wrongChoices, courseID })
        });
        // let res = await results.json();
    } catch (error) {
        console.log(`ERROR: QUIZS`);
    }
}

