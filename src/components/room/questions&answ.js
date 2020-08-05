import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Show from '../auth/show'
import cookie from 'react-cookies';

import * as actions from '../../store/roomReducer';
import './room.scss'

let answer = '';
let question = ''
const Questions = props => {

    const answerFun = e => {
        answer = e.target.value
    }

    const questionFun = e => {
        question = e.target.value
    }

    const submit = async (e, idx) => {
        e.preventDefault()
        e.target.reset()
        await props.addAnswer(
            props.sign.token,
            props.room.roomData.QAData[idx]._id,
            answer,
            props.userInfo.user._id,
            props.userInfo.user.name,
            props.userInfo.user.profileIMG,
        )
        const cookieroomID = cookie.load('roomID');
        props.getRoom(props.sign.token, cookieroomID)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Answer Added',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const deleteQuestion = (questionID, idx) => {
        props.deleteQuestion(props.sign.token, questionID, props.userInfo.user._id)
        // props.room.roomData.QAData.splice(idx, 1)
        const cookieroomID = cookie.load('roomID');
        props.getRoom(props.sign.token, cookieroomID)
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const askQuestion = (e) => {
        e.preventDefault()
        props.askQuestion(
            props.sign.token,
            question,
            props.room.roomData.courseData._id,
            props.userInfo.user.name,
            props.userInfo.user._id,
            props.userInfo.user.profileIMG
        )
        e.target.reset()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Question Added',
            showConfirmButton: false,
            timer: 1500
        })

    }


    const deleteAnswer = (questionid, questionidx, answerIndex) => {
        props.deleteAnswer(
            props.sign.token,
            props.userInfo.user._id,
            questionid,
            answerIndex)
        // props.room.roomData.QAData[questionidx].answers.splice(answerIndex, 1)
        const cookieroomID = cookie.load('roomID');
        props.getRoom(props.sign.token, cookieroomID)
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Deleted!',
            showConfirmButton: false,
            timer: 1500
        })
        

    }
    const goToQuestion = id => {
        props.room.questionIndex = id
        // props.room.goToQuestionState = true
    }

    return (

        <div className='QAData'>
            {props.room.goToQuestionState ? (<Redirect to="/Question" />) : null}
            <h2 className="courseName">Questions and Answers</h2>

            {props.room.roomData && props.room.roomData.QAData ? props.room.roomData.QAData.map((element, idx) => {
                return (
                    <div className='questionDiv' key={idx}>
                        <div className="quesHeader">
                            {/* <Link to='/Question'>  */}
                            <div className="time and creater">
                                <div className="imgAndName">
                                    <img className="imgOfWhoQues" src={element.profileIMG} />
                                    <p className="nameOfWhoQues">{element.virtualcreatedName}</p><br />
                                </div>







                                <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[idx].virtualuserID)}>
                                    <button onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)} className="iconbutton"><svg className="svgR" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-2 -10 18 28" className="delete-animation">
                                        <path d="M10.5,2.3V1.5c0,0,0-0.1,0-0.1C10.5,0.6,9.8,0,9,0H6c0,0-0.1,0-0.1,0C5.1,0,4.5,0.7,4.5,1.5v0.8H0v1.5h15V2.3H10.5z M9,2.2  H6V1.5h3V2.2z" className="lid" />
                                        <g className="can">
                                            <path d="M12.8,3.8v12c0,0,0,0,0,0.1c0,0.4-0.4,0.7-0.8,0.7H3c0,0,0,0-0.1,0c-0.4,0-0.7-0.4-0.7-0.8v-12H0.8v12   c0,0.6,0.2,1.2,0.7,1.6C1.8,17.8,2.4,18,3,18h9c0,0,0,0,0,0c1.2,0,2.2-1,2.2-2.2v-12H12.8z" />
                                            <rect x="3.8" y="6" width="1.5" height="8.2" />
                                            <rect x="6.8" y="6" width="1.5" height="8.2" />
                                            <rect x="9.8" y="6" width="1.5" height="8.2" />
                                        </g>
                                    </svg>
                                    </button>
                                </Show>













                                {/* <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[idx].virtualuserID)}>
                                    <div className="removeQuesRec">
                                        <div className="bin-container" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>
                                            <div className="bin-bg full"></div>
                                            <div className="white-bg cover"></div>
                                            <div className="bin-bg lid"></div>
                                        </div>
                                    </div> */}

                                {/* <button className="TakeQuizAndToto" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>delete question</button> */}
                                {/* </Show> */}


                                <p className="createdTimeQues"> {element.createdTime.slice(0, 10)}</p></div>
                            <hr className="magic" />

                            <div className="questionAsked" onClick={e => goToQuestion(idx)}>

                                Q{idx + 1}: <span className="sapnAQ">{element.question}</span>
                            </div>
                            {/* </Link> */}

                        </div>
                        {/* <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[idx].virtualuserID)}>
                            <button className="TakeQuizAndToto" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>delete question</button>
                        </Show> */}


                        <div className="numberOfAnswer"><span className="answerLength">{element.answers.length}  Answers</span>

                            <p className="checAns">
                                <ul>
                                    {props.room.roomData.QAData[idx].answers.map((e, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <hr />
                                                {/* <h4 > Answer {i + 1}</h4> */}

                                                <span className='answerALL'>
                                                    <img className="answerImg" src={props.room.roomData.QAData[idx].virtualAnswerImage[i]} />
                                                    <li > <span className="nameOfWhoAnswer">{props.room.roomData.QAData[idx].virtualAnswerName[i]}</span> <br /> <span className="answersOfWhoAnswer">{e}</span></li>
                                                    <Show condition={props.room.roomAdmin || props.userInfo.user._id === props.room.roomData.QAData[idx].virtualAnswerID[i]}>
                                                        <span className="deleteAnswer" onClick={e => deleteAnswer(props.room.roomData.QAData[idx]._id, idx, i)}>X</span>
                                                    </Show>
                                                </span>





                                            </React.Fragment>
                                        )
                                    })}
                                </ul>
                                <form onSubmit={e => submit(e, idx)}>
                                    <label className='formAnswerQuestion'>

                                        {/* <span className='inputLabel'>
                                            ADD your answer
                                        </span> */}

                                        <input className='addAnswer' required onChange={e => answerFun(e)} placeholder='ADD your answer'></input>
                                    </label>
                                    {/* <button>ADD Answer</button> */}
                                </form>

                                {/* Check answers! */}
                            </p>
                            {/* <Link to='/Question'> 
                            <p className="checAns" onClick={e => goToQuestion(idx)}>
                            ddd</p>
                            </Link>   */}
                        </div>
                        {/* <Link to='/Question'> <button onClick={e => goToQuestion(idx)}>go to question</button></Link> */}
                        {/* <ul>
                            {element.answers.map((e, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <h4 > answer {i + 1}</h4>
                                        <Show condition={props.room.roomAdmin || props.userInfo.user._id === props.room.roomData.QAData[idx].virtualAnswerID[i]}>
                                            <button onClick={e => deleteAnswer(props.room.roomData.QAData[idx]._id, idx, i)}>delete answer</button>
                                        </Show>
                                        <li >{e}</li>
                                        <span>Answer From: {element.virtualAnswerName[i]}</span>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                        
                        <form onSubmit={e => submit(e, idx)}>
                            <label>ADD your answer
                        <input onChange={e => answerFun(e)}></input>
                            </label>
                            <button>ADD Answer</button>
                        </form> */}

                    </div>
                )
            }) : null}
            <form className="addQuesForm" onSubmit={e => askQuestion(e)}>

                <input className="addQuesFor" onChange={e => questionFun(e)} placeholder="Have a question you can ask here  !"></input>

                <button className="addQuesForButt" >Ask</button>
            </form>
        </div>


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
    addAnswer: (token, questionId, answers, userid, name, profileIMG) =>
        dispatch(actions.addAnswer(token, questionId, answers, userid, name, profileIMG)),
    deleteQuestion: (token, questionID, userid) => dispatch(actions.deleteQuestion(token, questionID, userid)),
    askQuestion: (token, question, courseID, name, userid, profileIMG) =>
        dispatch(actions.askQuestion(token, question, courseID, name, userid, profileIMG)),
    deleteAnswer: (token, userid, questionid, answerIndex) =>
        dispatch(actions.deleteAnswer(token, userid, questionid, answerIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);