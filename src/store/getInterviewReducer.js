require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    user: [],
    showHide: false,
    showMore: 'Show More',
    moreLess: false,
    hideFirstSection: true,
    blockNone: null,
    exactIndex: false,
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
        case 'SHOW_HIDE':
            state.showHide = payload;
            return { ...state }
        case 'SHOW_MORE':
            state.showMore = payload;
            return { ...state }
        case 'LESS_MORE':
            state.moreLess = payload;
            return { ...state }
        case 'HIDE_FIRST_SECTION':
            state.hideFirstSection = payload;
            return { ...state }

        case 'EXACT_INDEX':
            state.exactIndex = payload;
            return { ...state }
        
        case 'DIV_BLOCK_NONE':
            state.blockNone = payload;
            return { ...state }
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


export const showHide = payloadData => {
    return {
        type: 'SHOW_HIDE',
        payload: payloadData
    }
}

export const showMore = payloadData => {
    return {
        type: 'SHOW_MORE',
        payload: payloadData
    }
}

export const lessMore = payloadData => {
    return {
        type: 'LESS_MORE',
        payload: payloadData
    }
}

export const hideFirstOne = payloadData => {
    return {
        type: 'HIDE_FIRST_SECTION',
        payload: payloadData
    }
}

export const theIndex = payloadData => {
    return {
        type: 'EXACT_INDEX',
        payload: payloadData
    }
}

export const divBlockNone = payloadData => {
    return {
        type: 'DIV_BLOCK_NONE',
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
        // dispatch(updateLoader(false))
        // dispatch(pagenation(res))
    } catch (error) {
        console.error(`ERROR: GET_INTERVIEW_REVIEW`);
    }
}


export const updateLoader = e => {
    return {
      type: 'updateLoader',
      payload: e,
    }
  }