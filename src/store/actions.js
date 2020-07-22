import superagent from 'superagent';


let api = 'https://rooms-for-geeks.herokuapp.com/users'; 

export const getRemoteData =() => dispatch => {

    // call my data 
    return superagent.get(api)
        .then(data => {
            dispatch(getAction(data.body))
        });
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}