/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/postRoomReduser'
import './room.scss';

const RoomForm = props => {

    const handleSubmitFun = e => {
        e.preventDefault();

        props.roomPost(
            props.sign.token,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,
            props.thePostRoom.members
        );
    }

    return (
        <>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Create Room</h3>

                    <div>
                        <label>roomName</label>
                        <input
                            type="text"
                            name="roomName"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <div>
                        <label>public</label>
                        <input
                            type='text'
                            name="publicc"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <div>
                        <label>password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    thePostRoom: state.thePostRoom
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeRoom: (e) => dispatch(actions.handleChangeRoom(e)),

    roomPost: (token, roomName, publicc, password, members) =>
        dispatch(actions.roomPost(token, roomName, publicc, password, members)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);