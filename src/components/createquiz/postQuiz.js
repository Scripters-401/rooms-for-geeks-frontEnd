import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/postQuizReducer'
import '../rooms/room.scss'
import './createquiz.scss'
import Slider from 'react-animated-slider';

let idx = 0;
const QuizForm = props => {

    const handleSubmitFun = e => {
        e.preventDefault();
    }

    const hi = () => {
        idx += 1
        props.updateOutput(renderForm(idx))
    }
    const settings = {
        dots: true,
        autoplay: false,
        arrow: true
    }
    const renderForm = (idx) => {
        return (
            <form className="form" key={idx}>

                <input className="input"
                    type="text"
                    name={`questions${idx}`}
                    onChange={(e) => props.handleAddQuiz(e)}
                    placeholder="question"
                />

                <input className="input"
                    type="text"
                    name={`correctAnswer${idx}`}
                    onChange={(e) => props.handleAddQuiz(e)}
                    placeholder="correctAnswer"
                />
                <input className="input"
                    type="text"
                    name={`wrongChoices${idx * 3}`}
                    onChange={(e) => props.handleAddQuiz(e)}
                    placeholder="wrongChoices #1"
                />
                <input className="input"
                    type="text"
                    name={`wrongChoices${idx * 3 + 1}`}
                    onChange={(e) => props.handleAddQuiz(e)}
                    placeholder="wrongChoices #2"
                />
                <input className="input"
                    type="text"
                    name={`wrongChoices${idx * 3 + 2}`}
                    onChange={(e) => props.handleAddQuiz(e)}
                    placeholder="wrongChoices #3"
                />
            </form>
        )
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
                                onChange={(e) => props.handleAddQuiz0(e)}
                                placeholder="quizName"
                            />
                            <input className="description"
                                type="text"
                                name="discription"
                                onChange={(e) => props.handleAddQuiz0(e)}
                                placeholder="discription"
                            />
                            <Slider {...settings}>
                                <div>
                                    {renderForm(0)}
                                </div>
                                {props.postNewQuiz.output.map(formElement => {

                                    return (
                                        <div>
                                            {formElement}
                                        </div>
                                    )


                                })}
                            </Slider>

                            <Link to="/create-room"><button className="button" type="submit" id="login-button">CREATE Quiz!</button></Link>
                        </form>
                        <button id="login-button" onClick={() => hi()} style={{
                            "z-index": "999999999",
                            "position": "absolute",
                            "bottom": "111px",
                            "right": "125px",
                        }}>Add Question</button>
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
    handleAddQuiz0: (e) => dispatch(actions.handleAddQuiz0(e)),
    quizPost: (token, quizName, discription, questions, correctAnswer, wrongChoices, courseID) =>
        dispatch(actions.quizPost(token, quizName, discription, questions, correctAnswer, wrongChoices, courseID)),
    updateOutput: (e) => dispatch(actions.updateOutput(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);