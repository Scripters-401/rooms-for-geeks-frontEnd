require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    roomC: '',
    privetRoomPass: false,
    newRoomId: '',
    checked: true,
    redirectCreateQuiz: false,
};

export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE_ROOM':
            state[payload.name] = payload.value
            // console.log(state[payload.name],payload.name);
            return { ...state };
        case 'HANDLE_PRIVET_PASS':
            state.privetRoomPass = payload
            return { ...state };
        case 'HANDLE_NEW_ROOM_ID':
            state.newRoomId = payload._id
            return { ...state };

        case 'updateChecked':
            state.checked = payload
            return { ...state };

        case 'updateRedirectCreateQuiz':
            state.redirectCreateQuiz = payload
            return { ...state };


        default:
            return state;
    }
}

export const handleNewRoomId = e => {
    return {
        type: 'HANDLE_NEW_ROOM_ID',
        payload: e,
    }
}

export const updateChecked = e => {
    return {
        type: 'updateChecked',
        payload: e,
    }
}

export const updateRedirectCreateQuiz = e => {
    return {
        type: 'updateRedirectCreateQuiz',
        payload: e,
    }
}



export const handleChangeRoom = e => {
    // console.log('JJJJJFFFFFF',e.target);
    return {
        type: 'HANDLE_CHANGE_ROOM',
        payload: { name: [e.target.name], value: e.target.value },
    }
}

export const handlePrivetPass = e => {
    return {
        type: 'HANDLE_PRIVET_PASS',
        payload: e,
    }
}

export const roomPost = (token, id, roomName, publicc, password, adminName, members) => async dispatch => {
    // console.log(roomName, publicc, password, adminName, members);
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

            body: JSON.stringify({ roomName, publicc, password, adminName, members })

        });
        let res = await results.json();
        dispatch(handleNewRoomId(res));
        //   console.log('jjjj',res);
    } catch (error) {
        console.error(`ERROR: ROOMS`);
    }
}