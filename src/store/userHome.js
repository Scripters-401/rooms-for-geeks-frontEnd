// import myRooms from '../components/userHome/myRooms';
import * as roleData from './signINUPReducer'
import cookie from 'react-cookies';
require('dotenv').config();



// const API = 'https://rooms-for-geeks.herokuapp.com';
// const API = 'http://localhost:4000';
const API = process.env.REACT_APP_API;



let initialState = {
    myRooms: [{
        roomName: 'JavaScript',
        public: true,
        cookieAdminName: 'hadeel',
        createdTime: "2020-06-21T13:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
    }, {
        roomName: 'Python',
        public: true,
        cookieAdminName: 'Bashar',
        createdTime: "2020-07-15T18:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
    },],
    allRooms: [{
        roomName: 'JavaScript',
        public: true,
        cookieAdminName: 'hadeel',
        createdTime: "2020-06-21T13:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
    }, {
        roomName: 'Python',
        public: true,
        cookieAdminName: 'Bashar',
        createdTime: "2020-07-15T18:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
    }, {
        roomName: 'Java',
        public: true,
        cookieAdminName: 'Samer',
        createdTime: "2020-06-7T22:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
    }],
    checkMyRooms: true,
};

// reducer : switch case
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'favorite':
            console.log('payload', payload);
            state.myRooms = [...payload];
            return { ...state };

        case 'getAllRooms':

            state.allRooms = payload;
            return { ...state };
        case 'check':
            state.checkMyRooms = payload;
            return { ...state };
            

        default:
            return state;
    }
}

/*************************************************** actions ****************************************************** */

export const favRoom = (token, id) => async dispatch => {
    try {
        console.log('API',API);
        let results = await fetch(`${API}/favourite/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        });
        let res = await results.json();
        console.log('res', res);
        if (res.length > 0) {
            dispatch(favorite(res));
            dispatch(check(true));
        }
        else {
            dispatch(favorite(initialState.myRooms));
            dispatch(check(false));
        }

    } catch (error) {
        console.error(`ERROR: SIGNOUT`);
    }
}

export const rooms = (token) => async dispatch => {
    try {
        let results = await fetch(`${API}/rooms`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        });
        let res = await results.json();
        dispatch(getAllRooms(res));
    } catch (error) {
        console.error(`ERROR: SIGNOUT`);
    }
}

export const upgrade = (token, id, role) => async dispatch => {
    console.log('token',token);
    console.log('id',id);
    console.log('role',role);
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
            body: JSON.stringify({   role })
        });
        let res = await results.json();
        dispatch(upgradeAction(res))
        // cookie.remove('auth');
        cookie.save('auth', res.newToken);
        dispatch(userRole(role));
        dispatch(roleData.validateToken(res.newToken));
    } catch (error) {
        console.error(`ERROR: PUT_USER`);
    }
}

export const userRole = payloadData => {
    return {
        type: 'USER_ROLE',
        payload: payloadData
    }
}

export const favorite = res => {
    console.log('resFav', res);
    return {
        type: 'favorite',
        payload: res,
    }
}

export const getAllRooms = res => {
    return {
        type: 'getAllRooms',
        payload: res,
    }
}


export const check = res => {
    return {
        type: 'check',
        payload: res,
    }
}


export const upgradeAction = res => {
    return {
        type: 'upgrade',
        payload: res,
    }
}







