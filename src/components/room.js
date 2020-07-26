/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as io from 'socket.io-client';

import * as actions from '../store/roomReducer';

import './initial.scss'
// import { handleChange } from '../store/signINUPReducer.js';
// const ENDPOINT = "http://localhost:4000/";
const ENDPOINT =  process.env.REACT_APP_API;



const Initial = props => {
    useEffect(() => {
        // console.log(props.sign.user.id);
        props.getRoom(props.sign.token, '5ef1f1407964642caa3a0188')
    }, [])
    // var ourCookeis = document.cookie.split(';');
    // for (var i = 0; i < ourCookeis.length; i++) {
    //     if (ourCookeis[i].indexOf('roomNameChat') === 0) {
    //         var roomName = ourCookeis[i].split('=')[1];
    //     }
    // }
    // 5ef1f1407964642caa3a0188
    let roomName = props.room.roomData.RData.roomName
    let userName = 'geeku'
    let message = {}
    let typingstate = '';
    let output = '';
    let counter = 0;


    let socket = io.connect(`${ENDPOINT}${roomName}`);
    // console.log(socket);

    // var message = document.getElementById('message');
    // var userName = document.getElementById('userName');
    // var button = document.getElementById('send');
    // var output = document.getElementById('output');
    // var feedback = document.getElementById('typing');
    // var counter = document.getElementById('members-counter');

    // document.getElementById('roon-name').innerHTML = roomName;

    // button.addEventListener('click', function () {
    const onlineFun = () => {
        socket.emit('online', { online: navigator.onLine, name: userName });
        socket.emit('chat', {
            message: message.value,
            userName: userName.value,
        });
        message.value = '';
    }

    const handleChange = e => {
        message = { [e.target.name]: e.target.value }
        socket.emit('xx', 'v');
    }


    const typing = e => {
        socket.emit('typing', userName);
    }

    socket.on('chat', function (data) {

        typingstate = '';
        output += '<p><strong>' + data.userName + ': </strong>' + data.message + '</p>';
    });

    socket.on('counter', function (data) {
        counter = data;
    });



    //     socket.emit('online', { online: navigator.onLine, name: userName.value });

    //     socket.emit('chat', {
    //         message: message.value,
    //         userName: userName.value,
    //     });
    //     message.value = '';
    // });

    // message.addEventListener('keypress', function () {
    //     socket.emit('typing', userName.value);
    // });


    // socket.on('chat', function (data) {
    //     feedback.innerHTML = '';
    //     output.innerHTML += '<p><strong>' + data.userName + ': </strong>' + data.message + '</p>';
    // });

    // socket.on('typing', function (data) {
    //     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    // });


    // socket.on('notif', function (data) {
    //     alert('Hey Admin New user joined the room' + ' ' + data);
    // });

    // socket.on('counter', function (data) {
    //     counter = data;
    // });

    return (

        <>

            {/* {console.log(props)} */}
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
                <h2>Geeks Chat</h2>
                <span>Members: </span>
                <span id="members-counter">{counter}</span>
                <h2 id='roon-name'>
                    {roomName}
                </h2>
                <div id="chat-window">
                    <div id="output">{output}</div>
                    <div id="typing">{typingstate}</div>
                </div>
                <p id="userName">{userName}</p>
                <input
                    id="message"
                    name='message'
                    type="text"
                    placeholder="Message"
                    onKeyPress={typing}
                    onChange={handleChange}
                />
                <button id="send" onClick={onlineFun}>Send</button>
            </div>

        </>
    )
}


const mapStateToProps = state => ({
    // data: state.data,
    sign: state.sign,
    room: state.room,
});

const mapDispatchToProps = (dispatch, getState) => ({
    getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
