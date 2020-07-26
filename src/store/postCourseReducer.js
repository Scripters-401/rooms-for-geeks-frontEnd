let API = `http://localhost:4000`;

let initialState = {
    course: '',
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE_COURSE':
            state[payload.name] = payload.value
            return { ...state };

        default:
            return state;
    }
}

export const handleChangeCourse = e => {
    return {
        type: 'HANDLE_CHANGE_COURSE',
        payload: { name: [e.target.name], value: e.target.value },
    }
}


export const coursePost = (token, courseName, topic, discription, tutorial) => async dispatch => {

    try {
        const results = await fetch(`${API}/course`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ courseName, topic, discription, tutorial })
        });
        await results.json();

    } catch (error) {
        console.error(`ERROR: COURSE`);
    }
}