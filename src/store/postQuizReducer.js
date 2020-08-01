// require('dotenv').config();
// const API = process.env.REACR_APP_API;
const API ='http://localhost:4000';
let initialState ={
   
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

export const quizPost = (token, quizName, discription, questions, correctAnswer, wrongChoices,courseID) => async dispatch =>{
    console.log(quizName, discription, questions, correctAnswer, wrongChoices,courseID);
    console.log('API', API , 'tokennn' , token);
    try {
        const results = await fetch(`${API}/quiz` ,{
            method: 'POST',
            mode: 'cors',
            // cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ quizName, discription, questions, correctAnswer, wrongChoices, courseID})
        });
        let res = await results.json();
    } catch(error){
        console.log(`ERROR: QUIZS`);
    }
}