import superagent from 'superagent';

require('dotenv').config();

const API = process.env.REACT_APP_API;

export const getRemoteData =() => dispatch => {

    // call my data 
    return superagent.get(`${API}/users`)
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