require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    user: [],
    // totalRecords: 0,
    // postsPerPage: 5,
    // totalPages: 0,
    // currentPage: 1,
    // initialPage: 1,
    // currentPost: [],
    // pageNumbers: [],
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'GET_INTERVIEW_REVIEW':
            state.user = payload.result;
            return { ...state };
        
        // case 'PAGENATION':
        //     state.totalRecords = state.user.length;
        //     state.totalPages = Math.ceil(state.totalRecords / state.postsPerPage);

        //     for (let i = 1; i <= state.totalPages; i++) {
        //         state.pageNumbers.push(i)
        //     }
            
        //     let idxLastPost = state.currentPage * state.postsPerPage;
        //     let idxFirstPost = idxLastPost - state.postsPerPage;
        //     state.currentPost = state.user.slice(idxFirstPost, idxLastPost);
            
        //     console.log('llllllllll', { ...state });

        //     return { ...state };
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



// export const pagenation = payloadData => {
//     return {
//         type: 'PAGENATION',
//         payload: payloadData
//     }
// }

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
        // dispatch(pagenation(res))
    } catch (error) {
        console.error(`ERROR: GET_INTERVIEW_REVIEW`);
    }
}
