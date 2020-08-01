/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userHomeAction from '../../store/userHome'
import * as actions from '../../store/postRoomReduser'
import * as action from '../../store/postCourseReducer'
import * as actionForQuiz from '../../store/postQuizReducer'
import './room.scss';

const RoomForm = props => {


    const testPrivet = e => {
        let x = !(!e.target.value);
        if (e.target.value == "true") {
            props.handlePrivetPass(false);
        }
        else {
            props.handlePrivetPass(true);
        }
        props.handleChangeRoom(e);
    }
    const handleSubmitFun = async e => {
        e.preventDefault();
        console.log('roooooo', props.postNewQuiz.quizName, props.postNewQuiz.discription, props.postNewQuiz.questions, props.postNewQuiz.correctAnswer, props.postNewQuiz.wrongChoices, props.postNewCourse.NewCourseId,);
        // console.log('hhh', props.thePostRoom.roomName,
        // props.thePostRoom.publicc,
        // props.thePostRoom.password,
        // props.userInfo.user.username,
        // props.thePostRoom.members
        await props.roomPost(
            props.sign.token,
            props.sign.user.id,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,
            props.userInfo.user.username,
            props.thePostRoom.members,
        );
        props.roomID(props.thePostRoom.newRoomId);

        await props.coursePost(
            props.sign.token,
            props.thePostRoom.courseName,
            props.thePostRoom.topic,
            props.thePostRoom.discription,
            props.thePostRoom.tutorial,
            props.userInfo.user._id,
            props.thePostRoom.newRoomId,
        )
        //    token, quizName, discription, questions, correctAnswer, wrongChoices,courseID
        props.quizPost(
            props.sign.token,
            props.postNewQuiz.quizName,
            props.postNewQuiz.discription,
            props.postNewQuiz.questions,
            props.postNewQuiz.correctAnswer,
            props.postNewQuiz.wrongChoices,
            props.postNewCourse.NewCourseId,
        )
    }

    return (
        <>
            <div className="allInall">
                <div className="wrapper ">
                    <div className="container">
                        <h1 className="nameOfForm">Create Room</h1>

                        <form className="form" onSubmit={(e) => handleSubmitFun(e)}>
                            <input className="input"
                                type="text"
                                name="roomName"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.roomName ? props.thePostRoom.roomName : "roomName"}

                            />
                            <input className="input"
                                type="text"
                                name="courseName"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.courseName ? props.thePostRoom.courseName : "courseName"}

                            />

                            <input className="input"
                                type="text"
                                name="topic"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.topic ? props.thePostRoom.topic : "Topic"}

                            />
                            <input className="input"
                                type="text"
                                name="tutorial"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.tutorial ? props.thePostRoom.tutorial : "Tutorial Link"}

                            />
                            <input className="description"
                                type="text"
                                name="discription"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.discription ? props.thePostRoom.discription : "Description"}

                            />
                            <Link to="/create-quiz"><button className="addQuiz">Add Quiz</button></Link>

                            <div className="radioButton">
                                <div className="radioPriv">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)} value={true} type="radio" id="public" name="publicc" />
                                    <label for="public">Public</label><br></br>
                                </div>
                                <div className="radioPublic">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)} value={false} type="radio" id="privet" name="publicc" />
                                    <label for="privet">Private</label>
                                </div>
                            </div>

                            <input className={`pass${props.thePostRoom.privetRoomPass}`}
                                type="password"
                                name="password"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Password"
                            />

                           <button className="button" type="submit" id="login-button">CREATE!</button>
                        </form>
                    </div>

                    <ul className="bg-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    thePostRoom: state.thePostRoom,
    userInfo: state.userInfo,
    postNewCourse: state.thePostCourse,
    postNewQuiz: state.postNewQuiz,
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeRoom: (e) => dispatch(actions.handleChangeRoom(e)),
    roomID: (e) => dispatch(userHomeAction.roomID(e)),

    roomPost: (token, id, roomName, publicc, password, adminName, members) =>
        dispatch(actions.roomPost(token, id, roomName, publicc, password, adminName, members)),

    handlePrivetPass: (value) => dispatch(actions.handlePrivetPass(value)),

    coursePost: (token, courseName, topic, discription, tutorial, userid, roomID) =>
        dispatch(action.coursePost(token, courseName, topic, discription, tutorial, userid, roomID)),


    quizPost: (token, quizName, discription, questions, correctAnswer, wrongChoices, courseID) =>
        dispatch(actionForQuiz.quizPost(token, quizName, discription, questions, correctAnswer, wrongChoices, courseID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);