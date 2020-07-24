import React, { useEffect } from 'react';
import './userPage.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/userReducer'

const User = props => {
    console.log('props -->', props);
    return (
        <div>

            <>
                <p>Name: {props.userData.user.name}</p>
                <p>Username: {props.userData.user.username}</p>
                <p>Major: {props.userData.user.major}</p>
                <p>Email: {props.userData.user.email}</p>
                <p>Favourite Rooms: {props.userData.user.favRooms}</p>
                <p>Created Time: {props.userData.user.createdTime}</p>
                <p>Role: {props.userData.user.role}</p>
            </>

        </div>
    );
}


const mapStateToProps = (state) => {
    console.log('userData state==', state);
    return {
        userData: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getUser: () => dispatch(actions.getInfoUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);