/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/roomReducer';
import Show from '../auth/show'
import Auth from '../auth/auth'
import QA from './questions&answ'
import Quiz from './answerQuiz'
import Chat from './chat'
import '../../reset.css';
import './room.scss'




const Room = props => {

    let roomName;
    let adminName;
    let roomID;


    useEffect(() => {
        setTimeout(() => {

            roomName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.roomName : null;
            adminName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.cookieAdminName ? props.room.roomData.RData.cookieAdminName : props.room.roomData.RData.adminName : null;
            roomID = props.userHome.choosenRoomID

            props.getRoom(props.sign.token, roomID)
            props.room.favOrNot = props.userInfo.user.favRooms.includes(props.userHome.choosenRoomID)
        }, 500);

    }, [])


    const addToFav = e => {
        props.addToFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        props.userInfo.user.favRooms.push(props.userHome.choosenRoomID)
        props.room.favOrNot = true;

    }

    const removefromFav = e => {
        props.userInfo.user.favRooms.splice(props.userInfo.user.favRooms.indexOf(props.userHome.choosenRoomID), 1)
        props.removefromFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        props.room.favOrNot = false;
    }
    const deleteRoom = e => {
        props.deleteRoom(props.sign.token, props.userInfo.user.username, props.userInfo.user._id, props.userHome.choosenRoomID);
        window.location.href = "/";
    }

    return (
        <>

            <div className='roomData'>
                <div id="room-data">
                    <h2 id='roon-name'>{roomName}</h2>
                    <Show condition={!props.room.favOrNot}>
                        <span className={`addToFav-${props.room.favOrNot}`} onClick={e => addToFav()}> add to fav</span>
                    </Show>
                    <Show condition={props.room.favOrNot}>
                        <span className={`addToFav-${props.room.favOrNot}`} onClick={e => removefromFav()}> remove from fav</span>
                    </Show>

                    <Auth capability="master-room">
                        <button className='deleteRoom' onClick={e => deleteRoom()}> Delete Room</button>
                    </Auth>
                    <p>
                        {adminName}
                    </p>
                    <p>
                        {props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.createdTime : null}
                    </p>
                    <p>
                        Public: {props.room.roomData && props.room.roomData.RData ? `${props.room.roomData.RData.public || props.room.roomData.RData.publicc}` : null}
                    </p>


                    <div className='courseData'>
                        <h2>Course Name: {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.courseName : null}</h2>
                        <p>Discription: {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.discription : null}</p>
                        <p>Topic: {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.topic : null}</p>
                    </div>
                </div>
            </div>

            <QA />
            <Quiz />
            <Chat />


        </>
    )
}


const mapStateToProps = state => ({
    sign: state.sign,
    room: state.room,
    userInfo: state.userInfo,
    userHome: state.userHome,
});

const mapDispatchToProps = (dispatch, getState) => ({
    getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
    addToFav: (token, userid, roomID) => dispatch(actions.addToFav(token, userid, roomID)),
    removefromFav: (token, userid, roomID) => dispatch(actions.removefromFav(token, userid, roomID)),
    deleteRoom: (token, name, userid, roomID) => dispatch(actions.deleteRoom(token, name, userid, roomID)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Room);
