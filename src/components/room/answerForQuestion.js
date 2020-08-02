import React from 'react';

import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import Show from '../auth/show'

import * as actions from '../../store/roomReducer';
import './question.scss'

let answer = '';
// let question = ''
const QuestionAndAnswers = props => {

  const answerFun = e => {
    answer = e.target.value
  }

  // const questionFun = e => {
  //   question = e.target.value
  // }

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

  // const askQuestion = (e) => {
  //   e.preventDefault()
  //   props.askQuestion(
  //     props.sign.token,
  //     question,
  //     props.room.roomData.courseData._id,
  //     props.userInfo.user.name,
  //     props.userInfo.user._id
  //   )
  //   e.target.reset()

  // }


  const deleteAnswer = (questionid, questionidx, answerIndex) => {
    props.room.roomData.QAData[questionidx].answers.splice(answerIndex, 1)
    props.deleteAnswer(
      props.sign.token,
      props.userInfo.user._id,
      questionid,
      answerIndex)

  }


  return (

    <div className='QAData'>
      {/* <NavLink to='/room'>Go Back</NavLink> */}
      <h2>Question and Answers</h2>

      <div className='questionDiv'>
        <p>
          {props.room.roomData.QAData[props.room.questionIndex].question}
        </p>
        <Show condition={props.room.roomAdmin || (props.userInfo.user._id === props.room.roomData.QAData[props.room.questionIndex].virtualuserID)}>
          <button onClick={e => deleteQuestion(props.room.roomData.QAData[props.room.questionIndex]._id, props.room.questionIndex)}>delete question</button>
        </Show>
        <span>Asked by: {props.room.roomData.QAData[props.room.questionIndex].virtualcreatedName}</span><br />
        <span>Created time: {props.room.roomData.QAData[props.room.questionIndex].createdTime.slice(0, 10)}</span>

        <ul>
          {props.room.roomData.QAData[props.room.questionIndex].answers.map((e, i) => {
            return (
              <React.Fragment key={i}>
                <h4 > answer {i + 1}</h4>
                <Show condition={props.room.roomAdmin || props.userInfo.user._id === props.room.roomData.QAData[props.room.questionIndex].virtualAnswerID[i]}>
                  <button onClick={e => deleteAnswer(props.room.roomData.QAData[props.room.questionIndex]._id, props.room.questionIndex, i)}>delete answer</button>
                </Show>
                <li >{e}</li>
                <span>Answer From: {props.room.roomData.QAData[props.room.questionIndex].virtualAnswerName[i]}</span>
              </React.Fragment>
            )
          })}
        </ul>

        <form onSubmit={e => submit(e, props.room.questionIndex)}>
          <label>ADD your answer
                        <input onChange={e => answerFun(e)}></input>
          </label>
          <button>ADD Answer</button>
        </form>

      </div>
      {/* ) */}
      {/* }) : null} */}
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAndAnswers);