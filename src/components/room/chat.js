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
    props.room.socket = io.connect(`${ENDPOINT}/${props.room.choosenRoomIDSocket}`);
    props.resetOutput();

    props.room.socket.on('chat', function (data) {
      props.updateTyping('');
      props.updateOutput(data)
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

    props.room.socket.on('addHaHa', function (data) {
      props.updateOutput(data)
    });

    props.room.socket.on('removeHaHa', function (data) {
      props.updateOutput(data)
    });

    props.room.socket.on('addLove', function (data) {
      props.updateOutput(data)
    });

    props.room.socket.on('removeLove', function (data) {
      props.updateOutput(data)
    });

  }, [props.room.choosenRoomIDSocket])


  // useEffect(() => {
  //   props.room.socket.on('notif', function (data) {
  //     if (props.userInfo.user.username === adminName) {
  //       props.updateNotifications(`Hey Admin ${adminName} New user joined the room ${roomName} ...`);

  //       setTimeout(() => {
  //         props.updateNotifications('');
  //       }, 5000);
  //     }
  //   });
  // }, [props.room.roomData.RData])


  const onlineFun = () => {
    props.room.socket.emit('chat', {
      message: props.chat.message,
      userName: props.userInfo.user.username,
      profileIMG: props.userInfo.user.profileIMG,
    });
    document.getElementById('message').value = '';
  }

  const typing = e => {
    props.room.socket.emit('typing', props.userInfo.user.username);
    if (e.key === 'Enter') {
      onlineFun()
    }
  }

  const addLike = (id, name) => {
    props.room.socket.emit('addLikes', id);
    props.chat.didLike[id] = true;

  }

  const addHaHa = (id, name) => {
    props.room.socket.emit('addHaHa', id);
    props.chat.didHaHa[id] = true;

  }

  const removeLike = id => {
    props.room.socket.emit('removeLikes', id);
    props.chat.didLike[id] = false;
  }

  const removeHaHa = id => {
    props.room.socket.emit('removeHaHa', id);
    props.chat.didHaHa[id] = false;
  }

  const addLove = id => {
    props.room.socket.emit('addLove', id);
    props.chat.didLove[id] = true;
  }

  const removeLove = id => {
    props.room.socket.emit('removeLove', id);
    props.chat.didLove[id] = false;
  }

  return (
    <div id="geeks-chat" className={`chat-${props.chat.open}`} style={props.room.scroll ? {
      position: 'absolute',
      bottom: '0'
    } : { position: 'fixed', right: '0' }}>
      {/* <p>{props.chat.notification}</p> */}
      <div className='chatHeader' onClick={e => props.openCloseChat()}>
        <span className="chatH2">Geeks Chat</span>
        <span className="chatMembers">Members {props.chat.counter} </span>
        {/* <span id="members-counter"></span> */}
      </div>

      {/* <h2 id='roon-name'>{roomName}</h2> */}
      <div id="chat-window">
        <div id="output">
          {props.chat.output.map((element, idx) => {
            return (
              <div className="messaheDiv" key={idx}>
                
                <div className="userInfoAll">
                  <img className="userImgeChat" src={element.profileIMG} alt='profileIMG'></img>
                  <p><strong>{element.userName} </strong>
                    {element.message}
                  </p>
                </div>
                <div className="emoji">
                  <span
                    className={`like-${props.chat.didLike[idx] ? props.chat.didLike[idx] : false}`}
                    role="img"
                    aria-label="likeEmoji"
                    onClick={e => props.chat.didLike[idx] ? removeLike(idx) : addLike(idx, element.userName)}
                  >👍{`${element.likes}`}</span>

                  <span
                    className={`like-${props.chat.didHaHa[idx] ? props.chat.didHaHa[idx] : false}`}
                    role="img"
                    aria-label="likeEmoji"
                    onClick={e => props.chat.didHaHa[idx] ? removeHaHa(idx) : addHaHa(idx, element.userName)}
                  >😂{`${element.haha}`}</span>

                  <span
                    className={`like-${props.chat.didLove[idx] ? props.chat.didLove[idx] : false}`}
                    role="img"
                    aria-label="likeEmoji"
                    onClick={e => props.chat.didLove[idx] ? removeLove(idx) : addLove(idx, element.userName)}
                  >❤{`${element.Love}`}</span>
                </div>
                <span className='msgTime'>

                  {element.msgTime.hours}:
{element.msgTime.minutes}:
{element.msgTime.seconds}
({element.msgTime.date}/
{element.msgTime.month})


</span>
              </div>
            )
          })}
        </div>
        <div id="typing">{props.chat.typingstate}</div>
      </div>
      {/* <p id="userName">{props.userInfo.user.username}</p> */}
      <input
        id="message"
        name='message'
        type="text"
        placeholder="Message"
        onKeyPress={typing}
        onChange={(e) => props.message(e)}
        required={true}
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
  openCloseChat: () => dispatch(actions.openCloseChat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);