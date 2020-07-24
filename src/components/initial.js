import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../store/actions.js'


const Initial = props => {


    return (
        <>
        {/* {console.log(props)} */}
            <div>
                hiiiiiiiiiii
            </div>
            {/* <button onClick={fetchData}>Get data</button> */}
            <div>
            {props.sign.user.role} <br/>
            {props.sign.user.id}

            </div>
        </>
    )
}


const mapStateToProps = state => ({
    data: state.data,
    sign: state.sign
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
