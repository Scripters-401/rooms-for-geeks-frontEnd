import React from 'react';

import { connect, dispatch } from 'react-redux';

import * as actions from '../store/actions.js'


const Initial = props => {

    const fetchData = (e) => {
        props.get();
    }

    return (
        <>
            <button onClick={fetchData}>Get data</button>
            {props.data.results.map((record, idx) => {
                return (
                    <div key={idx}>
                        {record.username}
                    </div>
                )
            })}
        </>
    )
}


const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
