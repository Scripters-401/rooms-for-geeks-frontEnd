import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/roomReducer';
let answer = '';
const Questions = props => {

    const answerFun = e => {
        answer = e.target.value
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


    return (

        <div className='QAData'>
            {props.room.roomData && props.room.roomData.QAData ? props.room.roomData.QAData.map((element, idx) => {
                return (
                    <div key={idx}>
                        <p>
                            {element.question}
                        </p>
                        <span>Asked by: {element.virtualcreatedName}</span><br />
                        <span>Created time: {element.createdTime.slice(0, 10)}</span>
                        <ul>
                            {element.answers.map((e, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <h4 > answer {i + 1}</h4>
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
                        </form>

                    </div>
                )
            }) : null}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);