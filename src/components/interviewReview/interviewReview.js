/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/interviewReviewReducer'
import './interviewReview.scss';

const InterviewReviewForm = props => {


    const handleSubmitFun = e => {
        e.preventDefault();

        props.interviewPost(
            props.sign.token,
            props.interView.companyName,
            props.interView.review,
            props.interView.date,
            props.interView.rate,
            props.interView.anonymous,
            props.interView.position
        );
    }

    return (
        <>
            <div>
                <>
                    <p>{props.interView.companyName}</p>
                    <p>{props.interView.review}</p>
                    <p>{props.interView.date}</p>
                    <p>{props.interView.rate}</p>
                    <p>{props.interView.anonymous}</p>
                    <p>{props.interView.createdTime}</p>
                    <p>{props.interView.position}</p>
                </>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Interview Review</h3>

                    <div>
                        <label>companyName</label>
                        <input
                            type="text"
                            name="companyName"
                            onChange={(e) => props.handleChangeInterview(e)}
                        />
                    </div>

                    <div>
                        <label>review</label>
                        <input
                            type="text"
                            name="review"
                            onChange={(e) => props.handleChangeInterview(e)}
                        />
                    </div>

                    <div>
                        <label>date</label>
                        <input
                            type="date"
                            name="date"
                            onChange={(e) => props.handleChangeInterview(e)}
                        />
                    </div>

                    <div>
                        <label>rate</label>
                        <input
                            type='range'
                            defaultValue="0"
                            min={0}
                            max={5}
                            step={1}
                            name="rate"
                            onChange={(e) => props.handleChangeInterview(e)}
                        />
                    </div>

                    <div>
                        <label>anonymous</label>
                        <input
                            type="checkbox"
                            name="anonymous"
                            onChange={(e) => props.handleChangeInterview(e)}
                        />
                    </div>
                    <div>
                        <label>position</label>
                        <input
                            type="text"
                            name="position"
                            onChange={(e) => props.handleChangeInterview(e)}
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
    interView: state.interviewR
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeInterview: (e) => dispatch(actions.handleChangeInterview(e)),

    interviewPost: (token, companyName, review, date, rate, anonymous, position) =>
        dispatch(actions.interviewPost(token, companyName, review, date, rate, anonymous, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewReviewForm);