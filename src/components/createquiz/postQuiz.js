import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/postQuizReducer'
import '../rooms/room.scss'
import './createquiz.scss'
// import Carousel from 'react-bootstrap/Carousel'
import Slider from 'react-animated-slider';
let idx = 0;
const QuizForm = props => {

    const handleSubmitFun = e => {
        e.preventDefault();
        console.log(props, 'ppppppppppppppp');
    }

    const hi = () => {
        props.updateOutput(renderForm(idx))
        idx += 1
    }
    const settings = {
        dots: true,
        autoplay: false,
        // autoplaySpeed: 4000,
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
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="quizName"
                            />
                            <input className="description"
                                type="text"
                                name="discription"
                                onChange={(e) => props.handleAddQuiz(e)}
                                placeholder="discription"
                            />
                            {/* <Slider className="slider"> */}
                            <Slider {...settings}>
                                {props.postNewQuiz.output.map(formElement => {

                                    return (
                                        <div>
                                            {formElement}
                                        </div>
                                    )


                                })}
                            </Slider>

                            <Link to="/create-room"><button className="button" type="submit" id="login-button">CREATE Quiz!</button></Link>
                            {/* <button className="button" type="submit" id="login-button">CREATE Quiz!</button> */}
                        </form>
                        <button onClick={() => hi()} style={{
                            "z-index": "999999999",
                            "background-color": "red",
                            "position": "absolute"
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
    quizPost: (token, quizName, discription, questions, correctAnswer, wrongChoices, courseID) =>
        dispatch(actions.quizPost(token, quizName, discription, questions, correctAnswer, wrongChoices, courseID)),
    updateOutput: (e) => dispatch(actions.updateOutput(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);