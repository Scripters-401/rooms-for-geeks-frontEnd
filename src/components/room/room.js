/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as io from 'socket.io-client';

import * as actions from '../../store/roomReducer';

import './room.scss'


const ENDPOINT = process.env.REACT_APP_API;


const Initial = props => {

    let roomName;
    let adminName;
    let roomID;
 

    useEffect(() => {
        roomName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.roomName : null;
        adminName = props.room.roomData && props.room.roomData.RData ? props.room.roomData.RData.cookieAdminName ? props.room.roomData.RData.cookieAdminName : props.room.roomData.RData.adminName : null;
        roomID = props.userHome.choosenRoomID
        props.getRoom(props.sign.token, roomID)




    }, [])

    useEffect(() => {
        if (props.room.socket) {
            props.room.socket.disconnect();
        }

        props.room.socket = io.connect(`${ENDPOINT}/${props.userHome.choosenRoomID}`);
        props.resetOutput();

        props.room.socket.on('chat', function (data) {
            props.updateTyping('');
            props.updateOutput({ userName: data.userName, message: data.message })
        });

        props.room.socket.on('counter', function (data) {
            props.updateCounter(data);
        });

        props.room.socket.on('typing', function (data) {
            props.updateTyping(`${data} is typing a message...`);
        });



    }, [props.userHome.choosenRoomID])

    useEffect(() => {
        setTimeout(() => {
            props.room.socket.on('notif', function (data) {
                if (props.userInfo.user.username === adminName) {
                    props.updateNotifications(` Hey Admin ${adminName} New user joined the room ${roomName} ...`);

                    setTimeout(() => {
                        props.updateNotifications('');
                    }, 5000);
                }
            });
        }, 2000);


    }, [props.room.roomData.RData])


    const onlineFun = () => {

        // socket.emit('online', { online: navigator.onLine, name: userName });
        props.room.socket.emit('chat', {
            message: props.room.message,
            userName: props.userInfo.user.username,
        });
        document.getElementById('message').value = '';
    }

    const typing = e => {
        props.room.socket.emit('typing', props.userInfo.user.username);
    }


    let selectedAnswers = [];
    const submitQuiz = (e, quizID) => {
        if (selectedAnswers.length !== props.room.roomData.renderedQuiz.questions.length) {
            alert('stiill some questions ')
        } else {
            props.postAnswers(props.sign.token, selectedAnswers, quizID, props.userInfo.user._id)
        }
    }
    const choseAnswer = (e, questionID) => {
        selectedAnswers[questionID] = e.target.value
    }

    return (
        <>
            <div className='roomData'>
                <div id="room-data">
                    <h2 id='roon-name'>{roomName}</h2>
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
                        <h2>Course Name: {roomName ? props.room.roomData.courseData.courseName : null}</h2>
                        <p>Discription: {roomName ? props.room.roomData.courseData.discription : null}</p>
                        <p>Topic: {roomName ? props.room.roomData.courseData.topic : null}</p>
                    </div>




                    <div className='QAData'>
                        {props.room.roomData && props.room.roomData.QAData ? props.room.roomData.QAData.map((element, idx) => {
                            return (
                                <div key={idx}>
                                    <p>
                                        {element.question}
                                    </p>
                                    <span>Asked by: {element.virtualcreatedName}</span><br />
                                    <span>Created time: {element.createdTime.slice(0, 10)}</span>
                                    <ul>
                                        {element.answers.map((e, i) => {
                                            return (
                                                <React.Fragment key={i}>
                                                    <h4 > answer {i + 1}</h4>
                                                    <li >{e}</li>
                                                    <span>Answer From: {element.virtualAnswerName[i]}</span>
                                                </React.Fragment>
                                            )
                                        })}
                                    </ul>

                                </div>
                            )
                        }) : null}
                    </div>


                    <div className='renderedQuiz'>
                        <h2>Quiz Name: {props.room.roomData && props.room.roomData.renderedQuiz ? props.room.roomData.renderedQuiz.quizName : null}</h2>
                        {props.room.roomData && props.room.roomData.renderedQuiz && props.room.roomData.renderedQuiz.questions ? props.room.roomData.renderedQuiz.questions.map((element, idx) => {
                            return (
                                <div key={idx}>
                                    <p>
                                        Question{idx + 1}: {element}
                                    </p>
                                    <div>
                                        {props.room.roomData.renderedQuiz.answers[idx].map((e, i) => {

                                            return (
                                                <React.Fragment key={i}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={i}
                                                            name={idx}
                                                            value={e}
                                                            onClick={e => choseAnswer(e, idx)}
                                                        />
                                                        {e}
                                                    </label>
                                                    <br />
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }) : null}
                        <button onClick={e => submitQuiz(e, props.room.roomData.renderedQuiz._id)}>Submit Quiz</button>
                        {props.room.score}
                    </div>


                </div>

                <div id="geeks-chat">
                    <p>{props.room.notification}</p>
                    <h2>Geeks Chat</h2>
                    <span>Members: </span>
                    <span id="members-counter">{props.room.counter}</span>
                    {/* <h2 id='roon-name'>{roomName}</h2> */}
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
            </div>


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
    message: (e) => dispatch(actions.message(e)),
    updateOutput: (e) => dispatch(actions.updateOutput(e)),
    updateCounter: (e) => dispatch(actions.updateCounter(e)),
    updateTyping: (e) => dispatch(actions.updateTyping(e)),
    updateNotifications: (e) => dispatch(actions.updateNotifications(e)),
    postAnswers: (token, answers, quizID, userID) => dispatch(actions.postAnswers(token, answers, quizID, userID)),
    resetOutput: () => dispatch(actions.resetOutput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);