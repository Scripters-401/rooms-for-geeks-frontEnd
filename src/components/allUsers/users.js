/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/allUseres';

const AllUsers = props => {
    useEffect(() => {
        props.getUsers(props.sign.token)
    }, [props.sign.token])


    return (
        <section>
            {props.allUsers.user.map(data => {
                return (
                    <div>
                        <p>Name: {data.name}</p>
                        <p>Username: {data.username}</p>
                        <p>Major: {data.major}</p>
                        <p>Email: {data.email}</p>
                        <p>Created Time: {data.createdTime}</p>
                        <p>Role: {data.role}</p>
                        <p>===========================================================</p>
                    </div>
                )
            })}
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
        allUsers: state.allUsers,
        sign: state.sign
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getUsers: (token) => dispatch(actions.getUsers(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);