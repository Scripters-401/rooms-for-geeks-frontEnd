/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/QAReducer'
import './QA.scss';

const QAForm = props => {


    const handleSubmitFun = e => {
        e.preventDefault();

        props.QAPost(
            props.sign.token,
            props.theQA.question,
            props.theQA.answers,
        );
    }

    return (
        <>
            <div>
                <>
                    <p>{props.theQA.question}</p>
                    <p>{props.theQA.answers}</p>
                </>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Q-A</h3>

                    <div>
                        <label>question</label>
                        <input
                            type="text"
                            name="question"
                            onChange={(e) => props.handleChangeQA(e)}
                        />
                    </div>

                    <div>
                        <label>answers</label>
                        <input
                            type="text"
                            name="answers"
                            onChange={(e) => props.handleChangeQA(e)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    theQA: state.theQA
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeQA: (e) => dispatch(actions.handleChangeQA(e)),

    QAPost: (token, companyName, review, date, rate, anonymous, position) =>
        dispatch(actions.QAPost(token, companyName, review, date, rate, anonymous, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QAForm);