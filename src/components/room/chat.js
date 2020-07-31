/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as io from 'socket.io-client';

import * as actions from '../../store/chat';
import './chat.scss'

const ENDPOINT = process.env.REACT_APP_API;



const Chat = props => {
  let roomName;
  let adminName;

  useEffect(() => {
    if (props.room.socket) {
      props.room.socket.disconnect();
    }

    roomName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.roomName : null;
    adminName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.cookieAdminName ? props.room.roomData.RData.cookieAdminName : props.room.roomData.RData.adminName : null;

    props.room.socket = io.connect(`${ENDPOINT}/${props.userHome.choosenRoomID}`);
    props.resetOutput();

    props.room.socket.on('chat', function (data) {
      props.updateTyping('');
      console.log('out', data);
      props.updateOutput(data)
      // props.updateOutput({ userName: data.userName, message: data.message, msgTime: data.msgTime, likes:data.likes})
    });

    props.room.socket.on('counter', function (data) {
      props.updateCounter(data);
    });

    props.room.socket.on('typing', function (data) {
      props.updateTyping(`${data} is typing a message...`);
    });

    props.room.socket.on('addLikes', function (data) {
      props.updateOutput(data)
    });

    props.room.socket.on('removeLikes', function (data) {
      props.updateOutput(data)
    });



  }, [props.userHome.choosenRoomID])


  useEffect(() => {
    setTimeout(() => {
      props.room.socket.on('notif', function (data) {
        if (props.userInfo.user.username === adminName) {
          props.updateNotifications(`Hey Admin ${adminName} New user joined the room ${roomName} ...`);

          setTimeout(() => {
            props.updateNotifications('');
          }, 5000);
        }
      });
    }, 2000);


  }, [props.room.roomData.RData])


  const onlineFun = () => {
    props.room.socket.emit('chat', {
      message: props.chat.message,
      userName: props.userInfo.user.username,
    });
    document.getElementById('message').value = '';
  }

  const typing = e => {
    if (e.key === 'Enter') {
      onlineFun()
    }
    props.room.socket.emit('typing', props.userInfo.user.username);
  }

  const addLike = (id, name) => {
    props.room.socket.emit('addLikes', id);
    props.chat.didLike[id] = true;

  }
  const removeLike = id => {
    props.room.socket.emit('removeLikes', id);
    props.chat.didLike[id] = false;
  } 

  return (
    <div id="geeks-chat">
      <p>{props.chat.notification}</p>
      <h2>Geeks Chat</h2>
      <span>Members: </span>
      <span id="members-counter">{props.chat.counter}</span>
      {/* <h2 id='roon-name'>{roomName}</h2> */}
      <div id="chat-window">
        <div id="output">
          {props.chat.output.map((element, idx) => {
            return (
              <div key={idx}>
                <p><strong>{element.userName}: </strong>{element.message}  :Likes -- {`${element.likes}`}
                  <span className='msgTime'>

                    {element.msgTime.hours}:
                    {element.msgTime.minutes}:
                    {element.msgTime.seconds}
                    ({element.msgTime.date}/
                    {element.msgTime.month})


                  </span>
                </p>
                <span
                  className={`like-${props.chat.didLike[idx] ? props.chat.didLike[idx]: false}`}
                  role="img"
                  aria-label="likeEmoji"
                  onClick={e => props.chat.didLike[idx] ? removeLike(idx) : addLike(idx, element.userName)}
                >👍</span>
              </div>
            )
          })}
        </div>
        <div id="typing">{props.chat.typingstate}</div>
      </div>
      <p id="userName">{props.userInfo.user.username}</p>
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
  )
}
const mapStateToProps = state => ({
  sign: state.sign,
  room: state.room,
  userInfo: state.userInfo,
  userHome: state.userHome,
  chat: state.chat,
});

const mapDispatchToProps = (dispatch, getState) => ({
  message: (e) => dispatch(actions.message(e)),
  updateOutput: (e) => dispatch(actions.updateOutput(e)),
  updateCounter: (e) => dispatch(actions.updateCounter(e)),
  updateTyping: (e) => dispatch(actions.updateTyping(e)),
  updateNotifications: (e) => dispatch(actions.updateNotifications(e)),
  resetOutput: () => dispatch(actions.resetOutput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);