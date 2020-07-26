let API = `http://localhost:4000`;

let initialState = {
    user: {},
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'USER_DATA':
            state.user = payload;
            return { ...state };

            case 'UPDATE_DATA':
                state[payload.name] = payload.value
                return { ...state };          

        default:
            return state;
    }
}

export const userAction = payloadData => {
    return {
        type: 'USER_DATA',
        payload: payloadData
    }
}


export const getInfoUser = (token, id) => async dispatch => {
    try {
        let theApi = `${API}/user/${id}`;
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
