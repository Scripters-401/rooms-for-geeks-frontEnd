import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Show from '../auth/show'

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

    const submit = (e, idx) => {
        e.preventDefault()
        props.addAnswer(
            props.sign.token,
            props.room.roomData.QAData[idx]._id,
            answer,
            props.userInfo.user._id,
            props.userInfo.user.name)
        props.getRoom(props.sign.token, props.userHome.choosenRoomID)
        e.target.reset()

    }

    const deleteQuestion = (questionID, idx) => {
        props.deleteQuestion(props.sign.token, questionID, props.userInfo.user._id)
        props.room.roomData.QAData.splice(idx, 1)
    }

    const askQuestion = (e) => {
        e.preventDefault()
        props.askQuestion(
            props.sign.token,
            question,
            props.room.roomData.courseData._id,
            props.userInfo.user.name,
            props.userInfo.user._id
        )
        e.target.reset()

    }


    const deleteAnswer = (questionid, questionidx, answerIndex) => {
        props.deleteAnswer(
            props.sign.token,
            props.userInfo.user._id,
            questionid,
            answerIndex)
        props.room.roomData.QAData[questionidx].answers.splice(answerIndex, 1)

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
                            <Link to='/Question'> <p className="questionAsked" onClick={e => goToQuestion(idx)}>
                                Q{idx + 1}: {element.question}
                            </p></Link>
                            <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[idx].virtualuserID)}>
                                <div className="removeQuesRec">
                                    <div className="bin-container" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>
                                        <div className="bin-bg full"></div>
                                        <div className="white-bg cover"></div>
                                        <div className="bin-bg lid"></div>
                                    </div>
                                </div>

                                {/* <button className="TakeQuizAndToto" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>delete question</button> */}
                            </Show>
                        </div>
                        {/* <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[idx].virtualuserID)}>
                            <button className="TakeQuizAndToto" onClick={e => deleteQuestion(props.room.roomData.QAData[idx]._id, idx)}>delete question</button>
                        </Show> */}
                        <div className="time and creater">
                            <span className="nameOfWhoQues">{element.virtualcreatedName}</span><br />
                            <span>at {element.createdTime.slice(0, 10)}</span></div>

                        <div className="numberOfAnswer">This question has {element.answers.length}  answers  <Link to='/Question'> <p className="checAns" onClick={e => goToQuestion(idx)}>
                            Check answers!
                        </p></Link>  </div>
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
    addAnswer: (token, questionId, answers, userid, name) =>
        dispatch(actions.addAnswer(token, questionId, answers, userid, name)),
    deleteQuestion: (token, questionID, userid) => dispatch(actions.deleteQuestion(token, questionID, userid)),
    askQuestion: (token, question, courseID, name, userid) =>
        dispatch(actions.askQuestion(token, question, courseID, name, userid)),
    deleteAnswer: (token, userid, questionid, answerIndex) =>
        dispatch(actions.deleteAnswer(token, userid, questionid, answerIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);