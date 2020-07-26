let API = `http://localhost:4000`;

let initialState = {
    putInfo: '',
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

            case 'UPDATE_DATA':
                state[payload.name] = payload.value
                return { ...state }; 

        default:
            return state;
    }
}

export const updateData = event => {
    return {
        type: 'UPDATE_DATA',
        payload: { name: [event.target.name], value: event.target.value },
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
        console.log('ressssss', res);
    } catch (error) {
        console.error(`ERROR: PUT_USER`);
    }
}