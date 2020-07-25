/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './userPage.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/userReducer';

const User = props => {
    useEffect(() => {
        props.getInfoUser(props.sign.token, props.sign.user.id)
    }, [props.sign.token, props.sign.user.id])

    return (
        <div>
            <>
                <p>Name: {props.userInfo.user.name}</p>
                <p>Username: {props.userInfo.user.username}</p>
                <p>Major: {props.userInfo.user.major}</p>
                <p>Email: {props.userInfo.user.email}</p>
                <p>Favourite Rooms: {props.userInfo.user.favRooms}</p>
                <p>Created Time: {props.userInfo.user.createdTime}</p>
                <p>Role: {props.userInfo.user.role}</p>
                {/* <img src={`${props.userInfo.user.profileIMG}`}></img> */}
                {/* <form>
                <img src={`${props.userInfo.imageE}`}></img>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/gif, image/jpeg, image/png"></input>
                    <input type="submit" onSubmit={() => props.addImage(props.userInfo.imageE)}></input>
                </form> */}
            </>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        sign: state.sign
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getInfoUser: (token, id) => dispatch(actions.getInfoUser(token, id)),
    // updateData: (payload) => dispatch(actions.updateData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);