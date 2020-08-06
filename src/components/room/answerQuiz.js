/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import * as actions from '../../store/roomReducer';
import Show from '../auth/show';
import './quizCss.scss';
let selectedAnswers = [];
const Quiz = props => {
  useEffect(() => {
    window.scrollTo(0, 0)

    props.room.redirectTakeQuiz = false;

  }, [])

  const scoreFunction =() =>{
    props.updateScore({ score: null })
    props.updatefinishQuiz(true, false)
  }

  const submitQuiz = (e, quizID) => {
    e.preventDefault();
    if (selectedAnswers.length !== props.room.roomData.renderedQuiz.questions.length) {
      alert('stiill some questions ')
    } else {
      props.postAnswers(props.sign.token, selectedAnswers, quizID, props.userInfo.user._id)
      selectedAnswers = [];
      window.scrollTo(0, 0)
    }
  }
  const choseAnswer = (e, questionID) => {
    selectedAnswers[questionID] = e.target.value
  }


  return (
<div className="allQuizDiv" style={props.room.score !== null ?{ "background": "url('https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80') no-repeat center center fixed" ,"background-size": "cover" ,"position": "sticky"} : {"background":"url('')"} }>
    <div className='renderedQuiz'>
      <h2 className="quizHeaderQues">Quiz Name: {props.room.roomData && props.room.roomData.renderedQuiz ? props.room.roomData.renderedQuiz.quizName : null}</h2>

      <Show condition={props.room.score === null}>
        {props.room.roomData && props.room.roomData.renderedQuiz && props.room.roomData.renderedQuiz.questions ?
          (<form className="questionQuizForm" onSubmit={e => submitQuiz(e, props.room.roomData.renderedQuiz._id)}>

            {props.room.roomData.renderedQuiz.questions.map((element, idx) => {
              return (
                <React.Fragment key={`${idx}`}>
                  <div className="eachQuesDiv">
                  <p className="Quizquestion">
                    Q{idx + 1}: {element}
                  </p>
                  <div className="answerDivQuiz">
                    {props.room.roomData.renderedQuiz.answers[idx].map((e, i) => {
                      return (
                        <React.Fragment key={`${idx}-${i}`}>
                          <label className="inputQuizQues">
                            <input
                              className="radioQuiz"
                              type="radio"
                              id={`${idx}-${i}`}
                              name={idx}
                              value={e}
                              onClick={e => choseAnswer(e, idx)}
                            />
                            <span className="allAnswer">{e}</span>
                          </label>
                          <br />
                        </React.Fragment>
                      )
                    })}
                  </div>
                  </div>
                </React.Fragment>
              )
            })}
           
             <button className="submitQuizAndToto">Submit Quiz</button>
          </form>
        
          ) : null}
       
      </Show>
      <Show condition={props.room.score !== null}>
        <div className="finalScore">
         Your score is {props.room.score} / {props.room.roomData.renderedQuiz.questions.length}
       
        </div>
        {!props.room.redirectTakeQuiz && props.room.finishQuiz ? (<Redirect to="/" />) : null}
        <div className="buttonReturn" >
              <button className="returnquiz" onClick={e => scoreFunction()}>Take quiz again! </button>
              <Link to='/room'><button className="returnquiz">Go back to room!</button></Link>
              </div>
      </Show>
    </div>
    </div>
  )


}


const mapStateToProps = state => ({
  sign: state.sign,
  room: state.room,
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch, getState) => ({
  postAnswers: (token, answers, quizID, userID) => dispatch(actions.postAnswers(token, answers, quizID, userID)),
  updateScore: (score) => dispatch(actions.updateScore(score)),
  updatefinishQuiz: (finishQuiz, redirectTakeQuiz) => dispatch(actions.updatefinishQuiz(finishQuiz, redirectTakeQuiz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);