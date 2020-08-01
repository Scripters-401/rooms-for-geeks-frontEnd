/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/getInterviewReducer';
import * as actions2 from '../../store/interviewReviewReducer';
import * as actions3 from '../../store/putReviewReducer';
import './interviewReview.scss';
import $ from 'jquery';
// import { Scrollbars } from 'react-custom-scrollbars';

const AllInterviewR = props => {

    // $(document).ready(function () {
    //     var zindex = 10;

    //     $("div.card").click(function (e) {
    //         e.preventDefault();

    //         var isShowing = false;

    //         if ($(this).hasClass("show")) {
    //             isShowing = true
    //         }

    //         if ($("div.cards").hasClass("showing")) {
    //             $("div.card.show")
    //                 .removeClass("show");

    //             if (isShowing) {
    //                 $("div.cards")
    //                     .removeClass("showing");
    //             } else {
    //                 $(this)
    //                     .css({ zIndex: zindex })
    //                     .addClass("show");
    //             }

    //             zindex++;

    //         } else {
    //             $("div.cards")
    //                 .addClass("showing");
    //             $(this)
    //                 .css({ zIndex: zindex })
    //                 .addClass("show");

    //             zindex++;
    //         }

    //     });
    // });

    useEffect(() => {
        props.getInterviewreview(props.sign.token)
    }, [props.sign.token])


    const handleSubmitFun = e => {
        e.preventDefault();
        e.target.reset();

        props.interviewPost(
            props.sign.token,
            props.interView.companyName,
            props.interView.review,
            props.interView.date,
            props.interView.rate,
            props.interView.anonymous,
            props.interView.position,
            props.userInfo.user.username
        ).then(() => {
            props.getInterviewreview(props.sign.token)
        })
    }

    const handleSubmitFunReview = e => {
        e.preventDefault();
        e.target.reset();
        console.log('sssss', props.interView._id);
        // console.log('rrrrr', props.addReview.review);
        props.putReview(
            props.sign.token,
            props.interView._id,
            props.addReview.review,
        )
        .then(() => {
            props.getInterviewreview(props.sign.token)
        })
    }

    const trueAnonymous = e => {
        e.target.value = true;
        props.checkAnonymous(true);
        props.handleChangeInterview(e);
    }

    return (

        <>
            <div id="cont">
                <div id="upperDiv" className="cards">

                    {props.allInterview.user.map((data, index) => {
                        if (data.anonymous === true) data.userName = 'Anonymous';
                        let date = new Date(data.createdTime);
                        let formattedDate = date.toDateString() + " at " + date.toTimeString().split(/\s/)[0]
                        return (

                            <div className="card" key={index}>
                                <div className="card__image-holder">

                                    <p className="compP">{data.companyName}</p>
                                    <p className="pastionP">Position: {data.position}</p>
                                </div>
                                <div className="card-title">
                                    <a href="#" className="toggle-info btn">
                                        <span className="left"></span>
                                        <span className="right"></span>
                                    </a>
                                    <h2>
                                        <p className="userNameP">{data.userName}</p>
                                        <p className="dateFormatedP">{formattedDate}</p>
                                    </h2>
                                </div>
                                <div className="card-flap flap1">
                                    <div className="card-description">
                                        <p className="revP">Review: {data.review}</p>
                                        <p className="dateP">Date: {data.date}</p>
                                        <p className="rateP">Rate:
                                       <span >{data.rate}</span>

                                            <input
                                                type='range'
                                                className="rangeInput"
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
                                    </div>
                                    <div>
                                <form onSubmit={(e) => handleSubmitFunReview(e)}>
                                    <div>
                                        <label>review</label>
                                        <input
                                            type="text"
                                            name="review"
                                            onChange={(e) => props.updateReview(e)}
                                        />
                                    </div>

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                                    {/* <div className="card-flap flap2">
                                    <div className="card-actions">
                                        <a href="#" className="btn">Read more</a>
                                    </div>
                                </div> */}


                                </div>
                                
                            </div>

                            // <div>
                            //     <p>review: {data.review}</p>
                            //     <p>createdTime: {formattedDate}</p>
                            //     <p>anonymous: {data.anonymous.toString()}</p>
                            //     <p>companyName: {data.companyName}</p>
                            //     <p>date: {data.date}</p>
                            //     <p>rate:
                            //     <input
                            //             type='range'
                            //             defaultValue="0"
                            //             min={0}
                            //             max={5}
                            //             value={data.rate}
                            //             step={1}
                            //             name="rate"
                            //             onChange={(e) => props.handleChangeInterview(e)}
                            //             disabled
                            //         />
                            //     </p>
                            //     <p>position: {data.position}</p>
                            //     <p>userName: {data.userName}</p>
                            //     <p>===========================================================</p>
                            // </div>

                            

                        )
                    })}
                </div>


                {/* <nav className="pageD">
                    <ul className='pagination'>
                        {props.allInterview.pageNumbers.map(number => (
                            <li key={number} className='page-item'>
                                <a onClick={() => props.pagenation(number)} href='#' className='page-link'>
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav> */}

                {/* 
<div className="allInall" id="divForm">
                <div className="wrapper "> */}
                <div className="containerI">
                    <h3 className="nameOfForm">Add Interview Review</h3>
                    <form id="form" onSubmit={(e) => handleSubmitFun(e)}>

                        <div>
                            <label>Company Name</label>
                            <input className="inputI"
                                type="text"
                                name="companyName"
                                onChange={(e) => props.handleChangeInterview(e)}
                            />
                        </div>

                        <div>
                            <label>Review</label>
                            <textarea className="reviewTextarea"
                                type="text"
                                name="review"
                                onChange={(e) => props.handleChangeInterview(e)}
                            ></textarea>
                        </div>

                        <div>
                            <label>Date</label>
                            <input className="inputI"
                                type="date"
                                name="date"
                                onChange={(e) => props.handleChangeInterview(e)}
                            />
                        </div>

                        <div>
                            <label>Position</label>
                            <input className="inputI"
                                type="text"
                                name="position"
                                onChange={(e) => props.handleChangeInterview(e)}
                            />
                        </div>
                        <div className="deRange">
                            <label>Rate:</label>
                            <input className="inputRange"
                                type='range'
                                defaultValue="0"
                                min={0}
                                max={5}
                                step={1}
                                name="rate"
                                onChange={(e) => props.handleChangeInterview(e)}
                            />
                            <label className="anonymousL">Anonymous:</label>
                            <input className="anonymousInput"
                                type="checkbox"
                                name="anonymous"
                                value={false}
                                onClick={(e) => trueAnonymous(e)}
                            />
                        </div>
                        <button type="submit" className="buttonI"
                        >Submit</button>
                    </form>
                </div>
                {/* </div>
            </div> */}
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        allInterview: state.allInterview,
        sign: state.sign,
        interView: state.interviewR,
        userInfo: state.userInfo,
        addReview: state.addReview,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getInterviewreview: (token) => dispatch(actions.getInterviewreview(token)),
    handleChangeInterview: (e) => dispatch(actions2.handleChangeInterview(e)),

    interviewPost: (token, companyName, review, date, rate, anonymous, position, userName) =>
        dispatch(actions2.interviewPost(token, companyName, review, date, rate, anonymous, position, userName)),
    checkAnonymous: (e) => dispatch(actions2.checkAnonymous(e)),
    // pagenation: (payload) => dispatch(actions.pagenation(payload)),
    putReview: (token, id, review) => dispatch(actions3.putReview(token, id, review)),
    updateReview: (event) => dispatch(actions3.updateReview(event)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AllInterviewR);
