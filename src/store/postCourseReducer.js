require('dotenv').config();

const API = process.env.REACT_APP_API;

let initialState = {
    course: '',
    NewCourseId: '',
};
export default (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'HANDLE_CHANGE_COURSE':
            state[payload.name] = payload.value
            return { ...state };
        case 'HANDLE_NEW_COURSE_ID' :
            state.NewCourseId = payload._id
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

export const handleNewCourse = e => {
    return{
        type: 'HANDLE_NEW_COURSE_ID',
        payload: e,
    }
}

export const coursePost = (token, courseName, topic, discription, tutorial, userid, roomID) => async dispatch => {
    console.log(courseName, topic, discription, tutorial, userid, roomID);
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
            body: JSON.stringify({ courseName, topic, discription, tutorial, userid, roomID })
        });
       let res = await results.json();
       dispatch(handleNewCourse(res));
    
    } catch (error) {
        console.error(`ERROR: COURSE`);
    }
}