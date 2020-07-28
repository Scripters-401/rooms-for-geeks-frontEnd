/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/postRoomReduser'
import './room.scss';

const RoomForm = props => {

    // useEffect(() => {
    //     props.roomPost(
    //         props.sign.token,
    //         props.sign.user.id,
    //         props.thePostRoom.roomName,
    //         props.thePostRoom.publicc,
    //         props.thePostRoom.password,
    //         props.thePostRoom.adminName,
    //         props.thePostRoom.members,
    //     )
    // }, [props.sign.token, props.sign.user.id])

    const handleSubmitFun = e => {
        e.preventDefault();
        console.log(props);
        props.roomPost(
            props.sign.token,
            props.sign.user.id,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,

            // props.thePostRoom.adminName,
            props.userInfo.user.username,
            props.thePostRoom.members,

        );
        
    }

    return (
        <>
        {console.log('pppppppppppp',props)}
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
    thePostRoom: state.thePostRoom,
    userInfo: state.userInfo,

});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeRoom: (e) => dispatch(actions.handleChangeRoom(e)),


    roomPost: (token, id, roomName, publicc, password, adminName, members) =>
        dispatch(actions.roomPost(token, id, roomName, publicc, password, adminName, members)),

});

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);