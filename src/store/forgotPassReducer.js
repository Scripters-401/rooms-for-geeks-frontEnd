require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    pass: '',
};

export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_FORGOT_PASSWORD':
            state[payload.name] = payload.value
            return { ...state };

        default:
            return state;
    }
}

export const handleForgotPass = e => {
    return {
        type: 'HANDLE_FORGOT_PASSWORD',
        payload: { name: [e.target.name], value: e.target.value },
    }
}


export const forgotPass = (emailToFound, newPassword) => async dispatch => {
    try {
        const results = await fetch(`${API}/forgotPassword`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailToFound, newPassword })
        });
        await results.json();
    } catch (error) {
        console.error(`ERROR: FORGOT_PASSWORD`);
    }
}