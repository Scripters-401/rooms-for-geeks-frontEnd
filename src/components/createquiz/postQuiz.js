import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/postQuizReducer'
import '../rooms/room.scss'

const QuizForm = props => {

    const handleSubmitFun = e => {
        e.preventDefault();
        props.roomPost(
            props.sign.token,
            props.postNewQuiz.quizName,
            props.postNewQuiz.discription,
            props.postNewQuiz.questions,
            props.postNewQuiz.correctAnswer,
            props.postNewQuiz.wrongChoices,
            props.postNewQuiz.courseID,
            props.userInfo.user.username,
        );

    }

    return (
        <>
            <div className="allInall">
                <div className="wrapper ">
                    <div className="container">
                        <h1 className="nameOfForm">Create Quiz</h1>

                        <form className="form" onSubmit={(e) => handleSubmitFun(e)}>
                            <input className="input"
                                type="text"
                                name="quizName"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="quizName"
                            />
                            <input className="input"
                                type="text"
                                name="questions"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="question"
                            />

                            <input className="input"
                                type="text"
                                name="correctAnswer"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="correctAnswer"
                            />
                            <input className="input"
                                type="text"
                                name="wrongChoices"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="wrongChoices #1"
                            />
                            <input className="input"
                                type="text"
                                name="wrongChoices"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="wrongChoices #2"
                            />
                            <input className="input"
                                type="text"
                                name="wrongChoices"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="wrongChoices #3"
                            />
                            <input className="description"
                                type="text"
                                name="discription"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="discription"
                            />

                            <Link to="/room"><button className="button" type="submit" id="login-button">CREATE Quiz!</button></Link>
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
    postNewQuiz: state.postNewQuiz,
    userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleAddQuiz: (e) => dispatch(actions.handleAddQuiz(e)),
    quizPost: (token, quizName, discription, questions, correctAnswer, wrongChoices, courseID) =>
        dispatch(actions.quizPost(token, quizName, discription, questions, correctAnswer, wrongChoices, courseID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);