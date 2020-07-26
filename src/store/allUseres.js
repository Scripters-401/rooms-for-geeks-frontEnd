require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    user: [],
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'USERS':
            state.user = payload.users;
            return { ...state };
        default:
            return state;
    }
}

export const userAction = payloadData => {
    return {
        type: 'USERS',
        payload: payloadData
    }
}

 
export const getUsers = (token) => async dispatch => {
    try {
        let theApi = `${API}/users`;
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
        dispatch(userAction(res))
    } catch (error) {
        console.error(`ERROR: GET_USER`);
    }
}
