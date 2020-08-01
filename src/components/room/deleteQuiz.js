/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../store/roomReducer';
import Show from '../auth/show'
// import './room.scss'
let selectedAnswers = [];
const Quiz = props => {

  useEffect(() => {
    setTimeout(() => {
      props.updateScore({ score: null })

    }, 2000)
  }, [props.room.score])

  const submitQuiz = (e, quizID) => {
    e.preventDefault();
    if (selectedAnswers.length !== props.room.roomData.renderedQuiz.questions.length) {
      alert('stiill some questions ')
    } else {
      props.postAnswers(props.sign.token, selectedAnswers, quizID, props.userInfo.user._id)
      selectedAnswers = [];

    }
  }
  const choseAnswer = (e, questionID) => {
    selectedAnswers[questionID] = e.target.value
    // console.log('selectedAnswers', selectedAnswers);
  }


  return (

    <div className='renderedQuiz'>
      <h2>Quiz Name: {props.room.roomData && props.room.roomData.renderedQuiz ? props.room.roomData.renderedQuiz.quizName : null}</h2>

      <Show condition={props.room.score === null}>
        {props.room.roomData && props.room.roomData.renderedQuiz && props.room.roomData.renderedQuiz.questions ?
          (<form onSubmit={e => submitQuiz(e, props.room.roomData.renderedQuiz._id)}>

            {props.room.roomData.renderedQuiz.questions.map((element, idx) => {
              return (
                <React.Fragment key={`${idx}`}>
                  <p>
                    Question{idx + 1}: {element}
                  </p>
                  <div>
                    {props.room.roomData.renderedQuiz.answers[idx].map((e, i) => {
                      return (
                        <React.Fragment key={`${idx}-${i}`}>
                          <label>
                            <input
                              type="radio"
                              id={`${idx}-${i}`}
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
                </React.Fragment>
              )
            })}
            <button >Submit Quiz</button>
          </form>


          ) : null}
      </Show>
      <Show condition={props.room.score !== null}>
        {props.room.score}
      </Show>
    </div>
  )


}


const mapStateToProps = state => ({
  sign: state.sign,
  room: state.room,
  userInfo: state.userInfo,
  // userHome: state.userHome,
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateScore: (score) => dispatch(actions.updateScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);