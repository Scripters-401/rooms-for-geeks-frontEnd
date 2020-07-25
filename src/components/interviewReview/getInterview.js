/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/getInterviewReducer';

const AllInterviewR = props => {
    useEffect(() => {
        props.getInterviewreview(props.sign.token)
    }, [props.sign.token])

    return (

        <section>
            {props.allInterview.user.map(data => {
                return (
                    <div>
                        <p>review: {data.review}</p>
                        <p>createdTime: {data.createdTime}</p>
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
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
        allInterview: state.allInterview,
        sign: state.sign
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getInterviewreview: (token) => dispatch(actions.getInterviewreview(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllInterviewR);