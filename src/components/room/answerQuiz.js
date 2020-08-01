/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/roomReducer';
import Show from '../auth/show'
// import './room.scss'
let selectedAnswers = [];
const Quiz = props => {

  useEffect(() => {
    setTimeout(() => {
      props.updateScore({ score: null })
      props.room.redirectTakeQuiz = false;

    }, 2000)
  }, [props.room.score])

  const submitQuiz = (e, quizID) => {
    e.preventDefault();
    if (selectedAnswers.length !== props.room.roomData.renderedQuiz.questions.length) {
      alert('stiill some questions ')
    } else {
      props.postAnswers(props.sign.token, selectedAnswers, quizID, props.userInfo.user._id)
      selectedAnswers = [];
      props.room.redirectTakeQuiz = false;


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
        {!props.room.redirectTakeQuiz ?
          (<>
            <div> SCoreeeeeeeeee</div>

               (<Redirect to="/room" />)


          </>)
          : null}

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
  // getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
  // message: (e) => dispatch(actions.message(e)),
  // updateOutput: (e) => dispatch(actions.updateOutput(e)),
  // updateCounter: (e) => dispatch(actions.updateCounter(e)),
  // updateTyping: (e) => dispatch(actions.updateTyping(e)),
  // updateNotifications: (e) => dispatch(actions.updateNotifications(e)),
  postAnswers: (token, answers, quizID, userID) => dispatch(actions.postAnswers(token, answers, quizID, userID)),
  // resetOutput: () => dispatch(actions.resetOutput()),
  updateScore: (score) => dispatch(actions.updateScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);