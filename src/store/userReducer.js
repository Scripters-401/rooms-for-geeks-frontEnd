import superagent from 'superagent';

let initialState = {
    user: {}
};


export default (state = initialState, action) => {

    let { type, payload } = action;
  
    switch (type) {
  
      case 'USER_DATA':
        state.user = payload.user;
        console.log('payload ->', payload);
        return payload;
  
      default:
        return state;
    }
  }
  
  export const getInfoUser = () => dispatch => {

    let api = `https://rooms-for-geeks.herokuapp.com/user/5f1b4aa2736c040017d625fd`;

    return superagent.get(api)
      .then(data => {
        dispatch(userAction(data.body))
      });
  }
  
  
  export const userAction = payloadData => {
    return {
      type: 'USER_DATA',
      payload: payloadData
    }
  }
