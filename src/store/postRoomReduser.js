require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    course: '',
};

export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE_ROOM':
            state[payload.name] = payload.value
            return { ...state };

        default:
            return state;
    }
}

export const handleChangeRoom = e => {
    return {
        type: 'HANDLE_CHANGE_ROOM',
        payload: { name: [e.target.name], value: e.target.value },
    }
}


export const roomPost = (token, roomName, publicc, password, members,cookieAdminName) => async dispatch => {
  console.log('hiiiiiiiiii',token, roomName, publicc, password, members,cookieAdminName);
    try {
        const results = await fetch(`${API}/room`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ roomName, publicc, password, members,cookieAdminName })
        });
      let res = await results.json();
      console.log('jjjj',res);
    } catch (error) {
        console.error(`ERROR: ROOMS`);
    }
}