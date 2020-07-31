require('dotenv').config();
const API = process.env.REACR_APP_API;

let initialState ={
    quiz: '',
};

export default (state = initialState, action) => {
    let { type , payload} = action;
    switch(type){
        case 'HANDLE_ADD_QUIZ':
            state[payload.name] = payload.value
            return { ...state};
        default:
            return state;    
    }
}

export const handleAddQuiz = e => {
    return {
        type : 'HANDLE_ADD_QUIZ',
        payload: { name: [e.target.name], value: e.target.value},
    }
}

export const quizPost = (token, quizName, discription, questions, correctAnswer, wrongChoices,adminName) => async dispatch =>{
    try {
        const results = await fetch(`${API}/quizCreated` ,{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({token, id, quizName, discription, questions, correctAnswer, wrongChoices, courseID, adminName})
        });
        let res = await results.json();
    } catch(error){
        console.log(`ERROR: QUIZS`);
    }
}