let API = `http://localhost:4000`;

let initialState = {
    QA: '',
};


export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE_QA':
            state[payload.name] = payload.value
            return { ...state };

        default:
            return state;
    }
}

export const handleChangeQA = e => {
    return {
        type: 'HANDLE_CHANGE_QA',
        payload: { name: [e.target.name], value: e.target.value },
    }
}


export const QAPost = (token, question, answers) => async dispatch => {

    try {
        const results = await fetch(`${API}/QA`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ question, answers })
        });
        await results.json();

    } catch (error) {
        console.error(`ERROR: QA`);
    }
}