/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as io from 'socket.io-client';

import * as actions from '../store/roomReducer';

import './initial.scss'


const ENDPOINT = process.env.REACT_APP_API;
let socket


const Initial = props => {
    // useEffect(() => {
    //     props.getRoom(props.sign.token, roomID)
    // }, [])


    let roomName = props.room.roomData.RData.roomName
    let adminName = props.room.roomData.RData.cookieAdminName
    let userName = props.userInfo.user.username
    let roomID = '5ef1f1407964642caa3a0188'

    useEffect( () => {
        props.getRoom(props.sign.token, roomID)


        socket.on('chat', function (data) {
            props.updateTyping('');
            console.log('props.output', props.room.output);
            props.updateOutput({ userName: data.userName, message: data.message })
        });

        socket.on('counter', function (data) {
            console.log(data, 'countertertert');
            props.updateCounter(data);
        });

        socket.on('typing', function (data) {
            props.updateTyping(`${data} is typing a message...`);
        });
    }, [])

    useEffect(() => {
        socket.on('notif', function (data) {
            // console.log(props.room,userName, adminName, userName === adminName);

            if (userName === adminName) {
                console.log('hi admin');
                props.updateNotifications(` Hey Admin ${adminName} New user joined the room ${roomName} ...`);

                setTimeout(() => {
                    props.updateNotifications('');
                }, 5000);
            }

        });

    }, [props.room.roomData.RData.roomName])



    if (!props.room.checkconnection) {
        socket = io.connect(`${ENDPOINT}/${roomID}`);
        props.room.checkconnection = true;
    }


    const onlineFun = () => {

        // socket.emit('online', { online: navigator.onLine, name: userName });
        console.log('props.room.message', props.room.message);
        socket.emit('chat', {
            message: props.room.message,
            userName: userName,
        });
        props.room.message = '';
    }

    const typing = e => {
        socket.emit('typing', userName);
    }




    return (
        <>
            <div id="room-data">
                rooom
                <div>
                    hiiiiiiiiiii
                </div>
                <div>
                    {props.sign.user.role} <br />
                    {props.sign.user.id}

                </div>
                <div>
                    {props.room.roomData.RData.roomName}
                </div>
            </div>

            <div id="geeks-chat">
                <p>{props.room.notification}</p>
                <h2>Geeks Chat</h2>
                <span>Members: </span>
                <span id="members-counter">{props.room.counter}</span>
                <h2 id='roon-name'>{roomName}</h2>
                <div id="chat-window">
                    <div id="output">
                        {props.room.output.map((element, idx) => {
                            return (
                                <div key={idx}>
                                    <p><strong>{element.userName}: </strong>{element.message} </p>
                                </div>
                            )
                        })}
                    </div>
                    <div id="typing">{props.room.typingstate}</div>
                </div>
                <p id="userName">{userName}</p>
                <input
                    id="message"
                    name='message'
                    type="text"
                    placeholder="Message"
                    onKeyPress={typing}
                    onChange={(e) => props.message(e)}
                />
                <button id="send" onClick={onlineFun}>Send</button>
            </div>

        </>
    )
}


const mapStateToProps = state => ({
    sign: state.sign,
    room: state.room,
    userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch, getState) => ({
    getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
    message: (e) => dispatch(actions.message(e)),
    updateOutput: (e) => dispatch(actions.updateOutput(e)),
    updateCounter: (e) => dispatch(actions.updateCounter(e)),
    updateTyping: (e) => dispatch(actions.updateTyping(e)),
    updateNotifications: (e) => dispatch(actions.updateNotifications(e)),


});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
