/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import cookie from 'react-cookies';

import * as actions from '../../store/roomReducer';
// import * as actions2 from '../../store/userHome';

import Show from '../auth/show'
import Auth from '../auth/auth'
import QA from './questions&answ'
import Quiz from './answerQuiz'
import Chat from './chat'
import '../../reset.css';
import './room.scss'
import { Redirect } from 'react-router-dom';
// import { login } from '../../store/signINUPReducer';




const Room = props => {

    // let roomName;
    // let adminName;
    // let roomID;
    // let roomAdmin;


    useEffect(() => {
        setTimeout(() => {

            // roomID = props.userHome.choosenRoomID
            const cookieroomID = cookie.load('roomID');
            // console.log('aa', cookieroomID, props.userHome.choosenRoomID, props.room.choosenRoomIDSocket);
            let x = props.userHome.choosenRoomID || cookieroomID;
            props.updateChoosenRoomIDSocket(x)
            // console.log('bb', cookieroomID, props.userHome.choosenRoomID, props.room.choosenRoomIDSocket, x);

            // eslint-disable-next-line no-unused-expressions
            // x ? cookie.save('roomID', props.userHome.choosenRoomIDSocket) : null;

            // props.getRoom(props.sign.token, props.room.choosenRoomIDSocket);
            // props.room.favOrNot = props.userInfo.user.favRooms.includes(props.room.choosenRoomIDSocket);
            window.scrollTo(0, 0)
            // roomAdmin = (props.userInfo.user.username === props.room.adminName);
            // props.updateRoomAdminBool(props.userInfo.user.username)
            // props.room.adminName = props.room.roomData.RData.cookieAdminName ? props.room.roomData.RData.cookieAdminName : props.room.roomData.RData.adminName;
            // props.room.roomAdmin = (props.userInfo.user.username === props.room.adminName);
            // console.log(props.room.roomAdmin ,'.......................');
            // roomName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.roomName : null;
            // adminName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.cookieAdminName ? props.room.roomData.RData.cookieAdminName : props.room.roomData.RData.adminName : null;
            // roomAdmin = (props.userInfo.user.username === adminName);
            // console.log(props.userInfo.user.username, adminName, props.room.roomData.RData.cookieAdminName, props.room.roomData.RData.adminName, roomAdmin, 'nnnnnnnnnnnnnnnnnn');
            // props.room.favOrNot = props.userInfo.user.favRooms.includes(props.userHome.choosenRoomID)
        }, 500);

    }, [])


    useEffect(() => {
        setTimeout(() => {
            cookie.save('roomID', props.room.choosenRoomIDSocket)
            props.getRoom(props.sign.token, props.room.choosenRoomIDSocket);
            let fav = props.userInfo.user && props.userInfo.user.favRooms ? props.userInfo.user.favRooms.includes(props.room.choosenRoomIDSocket) : null;
            props.updateFavOrNot(fav)
        }, 500);

    }, [props.room.choosenRoomIDSocket])
    useEffect(() => {
        props.updateRoomAdminBool(props.userInfo.user.username)

    }, [props.room.adminName])

    const addToFav = e => {
        props.addToFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        props.userInfo.user.favRooms.push(props.userHome.choosenRoomID)
        // props.room.favOrNot = true;
        props.updateFavOrNot(true)

    }

    const removefromFav = e => {
        props.userInfo.user.favRooms.splice(props.userInfo.user.favRooms.indexOf(props.userHome.choosenRoomID), 1)
        props.removefromFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        // props.room.favOrNot = false;
        props.updateFavOrNot(false)

    }
    const deleteRoom = e => {
        props.deleteRoom(props.sign.token,
            props.userInfo.user.username,
            props.userInfo.user._id,
            props.userHome.choosenRoomID,
            props.room.roomData.courseData._id);
        props.room.redirectAfterDelete = true;

    }
    const takeQuiz = () => {
        props.room.redirectTakeQuiz = true;
    }

    return (
        <>
            <div className='roomData'>
                {props.room.redirectAfterDelete ? (<Redirect to="/user-Home" />) : null}
                {props.room.redirectTakeQuiz ? (<Redirect to="/take-quiz" />) : null}
                <div id="room-data">
                    <h2 id='roon-name'>{props.room.roomData.RData && props.room.roomData.RData.roomName ? props.room.roomData.RData.roomName : null}</h2>
                    <Show condition={!props.room.favOrNot}>
                        <span className={`addToFav-${props.room.favOrNot}`} onClick={e => addToFav()}> add to fav</span>
                    </Show>
                    <Show condition={props.room.favOrNot}>
                        <span className={`addToFav-${props.room.favOrNot}`} onClick={e => removefromFav()}> remove from fav</span>
                    </Show>
                    <Show condition={props.room.roomAdmin}>
                        <Auth capability="master-room">
                            <button className='deleteRoom' onClick={e => deleteRoom()}> Delete Room</button>
                        </Auth>
                    </Show>
                    <p>
                        {props.room.adminName}
                    </p>
                    <p>
                        {props.room.roomData && props.room.roomData.RData && props.room.roomData.RData.createdTime ? props.room.roomData.RData.createdTime.slice(0, 10) : null}
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
            <button onClick={e => takeQuiz()}>Take Quiz</button>

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
    // rooms: (token) => dispatch(actions2.rooms(token)),
    getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
    addToFav: (token, userid, roomID) => dispatch(actions.addToFav(token, userid, roomID)),
    removefromFav: (token, userid, roomID) => dispatch(actions.removefromFav(token, userid, roomID)),
    deleteRoom: (token, name, userid, roomID, courseID) => dispatch(actions.deleteRoom(token, name, userid, roomID, courseID)),
    updateRoomAdminBool: (userid) => dispatch(actions.updateRoomAdminBool(userid)),
    updateChoosenRoomIDSocket: (userid) => dispatch(actions.updateChoosenRoomIDSocket(userid)),
    updateFavOrNot:(bool) => dispatch(actions.updateFavOrNot(bool)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Room);
