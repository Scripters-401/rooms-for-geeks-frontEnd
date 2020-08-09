/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import * as userHomeAction from '../../store/userHome'
import * as actions from '../../store/postRoomReduser'
import * as action from '../../store/postCourseReducer'
import * as actionForQuiz from '../../store/postQuizReducer'
// import * as actions from '../../store/userHome';

import './room.scss';

const RoomForm = props => {


    const testPrivet = e => {
        // let x = !(!e.target.value);
        if (e.target.value === "true") {
            props.handlePrivetPass(false);
            // props.thePostRoom.checked = false;
            props.updateChecked(true);
        }
        else {
            props.handlePrivetPass(true);
            // props.thePostRoom.checked = true;
            props.updateChecked(false);


        }
        props.handleChangeRoom(e);
    }
    const handleSubmitFun = async e => {
        e.preventDefault();
        await props.roomPost(
            props.sign.token,
            props.sign.user.id,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,
            props.userInfo.user.username,
            props.thePostRoom.members,
        );

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
        await props.quizPost(
            props.sign.token,
            props.postNewQuiz.quizName,
            props.postNewQuiz.discription,
            props.postNewQuiz.questions,
            props.postNewQuiz.correctAnswer,
            props.postNewQuiz.wrongChoices,
            props.postNewCourse.NewCourseId,
        )

        setTimeout(() => {
            props.roomID(props.thePostRoom.newRoomId);
            props.updateRedirectCreateQuiz(true);
            
        }, 200);

        // props.thePostRoom.redirectCreateQuiz = true;
        // e.target.reset()
    }

    return (
        <>
            {props.thePostRoom.redirectCreateQuiz ? (<Redirect to="/room" />) : null}
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
                                required
                                value={props.thePostRoom.roomName ? props.thePostRoom.roomName : null}
                            />
                            <input className="input"
                                type="text"
                                name="courseName"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.courseName ? props.thePostRoom.courseName : "courseName"}
                                required
                                value={props.thePostRoom.courseName ? props.thePostRoom.courseName : null}

                            />

                            {/* <input className="input"
                                type="text"
                                name="topic"
                                // onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.topic ? props.thePostRoom.topic : "Topic"}
                                hidden={true}
                            /> */}


                            <select required name="topic" className="input selector"
                                onChange={(e) => props.handleChangeRoom(e)}
                                value={props.thePostRoom.topic ? props.thePostRoom.topic : null}

                            >
                                <option value="" disabled selected>Topic</option>
                                <option value="engineering">Engineering</option>
                                <option value="art">ART</option>
                                <option value="science">Science</option>
                                <option value="informationTechnology">Information Technology</option>
                                <option value="math">Math</option>
                                <option value="languages">Languages</option>
                                <option value="sport">Sport</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="medicine">Medicine</option>
                                <option value="economics">Economics</option>
                            </select>

                            <input className="input"
                                type="text"
                                name="tutorial"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.tutorial ? props.thePostRoom.tutorial : "Tutorial Link"}
                                value={props.thePostRoom.tutorial ? props.thePostRoom.tutorial : null}

                            />
                            <input className="description"
                                type="text"
                                name="discription"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder={props.thePostRoom.discription ? props.thePostRoom.discription : "Description"}
                                required
                                value={props.thePostRoom.discription ? props.thePostRoom.discription : null}

                            />
                            <Link to="/create-quiz"><button className="addQuiz">Add Quiz</button></Link>

                            <div className="radioButton">
                                <div className="radioPriv">
                                    <input checked={props.thePostRoom.checked} className="radioBut" onClick={(e) => testPrivet(e)} value={true} type="radio" id="public" name="publicc" />
                                    <label for="public">Public</label><br></br>
                                </div>
                                <div className="radioPublic">
                                    <input checked={!props.thePostRoom.checked} className="radioBut" onClick={(e) => testPrivet(e)} value={false} type="radio" id="privet" name="publicc" />
                                    <label for="privet">Private</label>
                                </div>
                            </div>

                            <input className={`pass${props.thePostRoom.privetRoomPass}`}
                                type="password"
                                name="password"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Password"
                                disabled={!props.thePostRoom.privetRoomPass} required={props.thePostRoom.privetRoomPass}
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
    updateChecked: (bool) => dispatch(actions.updateChecked(bool)),
    updateRedirectCreateQuiz: (bool) => dispatch(actions.updateRedirectCreateQuiz(bool)),

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