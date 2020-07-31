require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    putInfo: '',
    hide: false,
    toggle: true
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'UPDATE_DATA':
            state[payload.name] = payload.value
            return { ...state };

        case 'HIDE_TOGGLE':
            state.hide = payload;
            state.toggle = payload;
            return { ...state }

        default:
            return state;
    }
}

export const hideFun = payload => {
    return {
        type: 'HIDE_TOGGLE',
        payload: payload,
    }
}

export const toggleFun = payload => {
    return {
        type: 'HIDE_TOGGLE',
        payload: !payload,
    }
}

export const updateData = e => {
    return {
        type: 'UPDATE_DATA',
        payload: { name: [e.target.name], value: e.target.value },
    }
}


export const putInfoUser = (token, id, password, name, major, university, profileIMG) => async dispatch => {
    try {
        let theApi = `${API}/user/${id}`;
        let results = await fetch(theApi, {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ password, name, major, university, profileIMG })
        })
        let res = await results.json();
        dispatch(userAction(res.RData))
    } catch (error) {
        console.error(`ERROR: PUT_USER`);
    }
}

const userAction = payloadData => {
    return {
        type: 'USER_DATA',
        payload: payloadData
    }
}