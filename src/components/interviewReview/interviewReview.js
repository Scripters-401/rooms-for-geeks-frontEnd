/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/getInterviewReducer';
import * as actions2 from '../../store/interviewReviewReducer'


const AllInterviewR = props => {
    useEffect(() => {
        props.getInterviewreview(props.sign.token)
    }, [props.sign.token])

    const handleSubmitFun = e => {
        // e.preventDefault();

        props.interviewPost(
            props.sign.token,
            props.interView.companyName,
            props.interView.review,
            props.interView.date,
            props.interView.rate,
            props.interView.anonymous,
            props.interView.position
        );
        props.getInterviewreview(props.sign.token)
    }

    return (

        <section>
            {props.allInterview.user.map(data => {
                let date = new Date(data.createdTime);
                let formattedDate = date.toDateString() + " at " + date.toTimeString().split(/\s/)[0]
                return (
                    <div>
                        <p>review: {data.review}</p>
                        <p>createdTime: {formattedDate}</p>
                        <p>anonymous: {data.anonymous.toString()}</p>
                        <p>companyName: {data.companyName}</p>
                        <p>date: {data.date}</p>
                        <p>rate:
                        <input
                                type='range'
                                defaultValue="0"
                                min={0}
                                max={5}
                                value={data.rate}
                                step={1}
                                name="rate"
                                onChange={(e) => props.handleChangeInterview(e)}
                                disabled
                            />
                        </p>
                        <p>position: {data.position}</p>
                        <p>userName: {data.userName}</p>
                        <p>===========================================================</p>
                    </div>
                )
            })}

            <div>

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
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
        allInterview: state.allInterview,
        sign: state.sign,
        interView: state.interviewR,
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getInterviewreview: (token) => dispatch(actions.getInterviewreview(token)),
    handleChangeInterview: (e) => dispatch(actions2.handleChangeInterview(e)),

    interviewPost: (token, companyName, review, date, rate, anonymous, position) =>
        dispatch(actions2.interviewPost(token, companyName, review, date, rate, anonymous, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllInterviewR);