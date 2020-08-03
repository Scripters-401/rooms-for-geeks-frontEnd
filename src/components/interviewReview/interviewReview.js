/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/getInterviewReducer';
import * as actions2 from '../../store/interviewReviewReducer';
import * as actions3 from '../../store/putReviewReducer';
import './interviewReview.scss';
// import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';
import { If, Then, Else } from '../if/if.js';
// import SmartCSS from 'smart-css';

const AllInterviewR = props => {

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

    const handleSubmitFunReview = (e, id) => {
        e.preventDefault();
        e.target.reset();
        props.putReview(
            props.sign.token,
            id,
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

    const showHideFun = e => {
        if (props.allInterview.showHide === e) {
            props.showHide(false);
            props.lessMore(false);
            props.showMore('Show More');
            
            props.hideFirstOne(true);
            props.theIndex(false);
        }
        else {
            props.showHide(e);
            
            props.hideFirstOne(false);
            props.theIndex(e);
        }
    }

    const hideReview = () => {
        if (props.allInterview.moreLess === false) props.lessMore(true);
        else props.lessMore(false);

        if (props.allInterview.showMore === 'Show More') props.showMore('Show Less');
        else props.showMore('Show More');
    }

    return (

        <>
            <div id="cont">
                <div id="upperDiv" className={"cards " + (props.allInterview.showHide || props.allInterview.showHide === 0 ? 'showing' : '')}>

                    {props.allInterview.user.map((data, index) => {
                        if (data.anonymous === true) data.userName = 'Anonymous';
                        let date = new Date(data.createdTime);
                        let formattedDate = date.toDateString() + " at " + date.toTimeString().split(/\s/)[0]
                        return (

                            <div className={"card " + (props.allInterview.showHide === index ? 'show' : '')}>
                                <div id="divCont">
                                    <div className="card__image-holder">

                                        <span className="compP">{data.companyName}</span>
                                        <span className="rate">
                                            <If condition={data.rate === 5} >
                                                <Then>
                                                    <input className="inputT" type="radio" id="star5" name="rate" value="5" defaultChecked disabled />
                                                    <label className="labelT" for="star5" title="text" >5 stars</label>
                                                </Then>
                                                <Else>
                                                    <input className="inputT" type="radio" id="star5" name="rate" value="5" disabled />
                                                    <label className="labelT" for="star5" title="text">5 stars</label>
                                                </Else>
                                            </If>


                                            <If condition={data.rate === 4} >
                                                <Then>
                                                    <input className="inputT" type="radio" id="star4" name="rate" value="4" defaultChecked disabled />
                                                    <label className="labelT" for="star4" title="text" >4 stars</label>
                                                </Then>
                                                <Else>
                                                    <input className="inputT" type="radio" id="star4" name="rate" value="4" disabled />
                                                    <label className="labelT" for="star4" title="text">4 stars</label>
                                                </Else>
                                            </If>


                                            <If condition={data.rate === 3} >
                                                <Then>
                                                    <input className="inputT" type="radio" id="star3" name="rate" value="3" defaultChecked disabled />
                                                    <label className="labelT" for="star3" title="text" >3 stars</label>
                                                </Then>
                                                <Else>
                                                    <input className="inputT" type="radio" id="star3" name="rate" value="3" disabled />
                                                    <label className="labelT" for="star3" title="text">3 stars</label>
                                                </Else>
                                            </If>


                                            <If condition={data.rate === 2} >
                                                <Then>
                                                    <input className="inputT" type="radio" id="star2" name="rate" value="2" defaultChecked disabled />
                                                    <label className="labelT" for="star2" title="text" >2 stars</label>
                                                </Then>
                                                <Else>
                                                    <input className="inputT" type="radio" id="star2" name="rate" value="2" disabled />
                                                    <label className="labelT" for="star2" title="text">2 stars</label>
                                                </Else>
                                            </If>
                                            <If condition={data.rate === 1} >
                                                <Then>
                                                    <input className="inputT" type="radio" id="star1" name="rate" value="1" defaultChecked disabled />
                                                    <label className="labelT" for="star1" title="text" >1 stars</label>
                                                </Then>
                                                <Else>
                                                    <input className="inputT" type="radio" id="star1" name="rate" value="1" disabled />
                                                    <label className="labelT" for="star1" title="text">1 stars</label>
                                                </Else>
                                            </If>
                                        </span>
                                        <p className="pastionP">Position: {data.position}</p>
                                    </div>
                                    <div className="card-title">
                                        <div className="formateD"><p className="dateFormatedP">{formattedDate}</p></div>
                                        <span className="toggle-info btn" onClick={(e) => showHideFun(index)} >
                                            <span className="left"></span>
                                            <span className="right"></span>
                                        </span>
                                        <h2>
                                            <p className="userNameP">{data.userName}</p>
                                        </h2>
                                    </div>
                                    <div className={`card-flap flap1 hideFirst-${props.allInterview.hideFirstSection}`} /** hideFirst-${props.allInterview.hideFirstSection} */>
                                        <div className={`card-description`}>
                                            <div className="intD"><p className={`dateP`}>The date of the interview was on {data.date}</p></div>

                                            <If condition={data.review.length <= 2} >
                                                <Then>
                                                    <div className="reviewsP">
                                                        <p className={`revP`}><h3 className="PR">Reviews:</h3> {data.review.map((reviewData) => {
                                                            return (
                                                                <p className={`reviewPPPP`}>{reviewData}</p>
                                                            )
                                                        })}</p></div>
                                                    <div className="divLessTow">
                                                        <form className="addReviewForm" onSubmit={(e) => handleSubmitFunReview(e, data._id)}>
                                                            <div>
                                                                <textarea
                                                                    type="text"
                                                                    name="review"
                                                                    placeholder="Add Review"
                                                                    className="addReviewInput"
                                                                    onChange={(e) => props.updateReview(e)}
                                                                ></textarea>
                                                            </div>

                                                            <button className="addReviewButton" type="submit">Submit</button>
                                                        </form>
                                                    </div>
                                                </Then>
                                                <Else>
                                                    <div id="section">
                                                        <div className="twoReview">
                                                            <div className="reviewsP">
                                                                <p className="revP"><h3 className="PR">Reviews:</h3> {data.review.slice(0, 2).map((reviewData) => {
                                                                    return (
                                                                        <p className="reviewPPPP">{reviewData}</p>
                                                                    )
                                                                })}
                                                                </p>
                                                            </div>
                                                            <p className={`revP moretext-${props.allInterview.moreLess}`}>
                                                                {data.review.slice(2, data.review.length).map((reviewData) => {
                                                                    return (
                                                                        <p className="reviewPPPP">{reviewData}</p>
                                                                    )
                                                                })}
                                                            </p>
                                                        </div>

                                                        <div className={`moretext-${props.allInterview.moreLess}`}>
                                                            <form className="addReviewForm" onSubmit={(e) => handleSubmitFunReview(e, data._id)}>
                                                                <textarea
                                                                    type="text"
                                                                    name="review"
                                                                    placeholder="Add Review"
                                                                    className="addReviewInput"
                                                                    onChange={(e) => props.updateReview(e)}
                                                                ></textarea>

                                                                <button className="addReviewButton" type="submit">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className={`divButton`}>
                                                        <button id="button" className={`custom-btn btn-16`} onClick={hideReview}>{props.allInterview.showMore}</button>
                                                    </div>
                                                </Else>
                                            </If>

                                        </div>

                                    </div>
                                </div>
                            </div>
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



                <div id="btnInt">
                    <button id="btnInterview" className="custom-btn btn-16" onClick={(e) => props.divBlockNone('divBlock')} >Add Interview Review</button>
                </div>
                <div id={props.allInterview.blockNone} className="modal">
                    <span onClick={(e) => props.divBlockNone('divNone')} className="close" title="Close Modal">&times;</span>





                    <Scrollbars>
                        <div className="containerI">
                            <form className="modal-content" id="formI" onSubmit={(e) => { handleSubmitFun(e); props.divBlockNone('divNone') }}>
                                <h3 className="nameOfForm">Add Interview Review</h3>

                                <div>
                                    <input className="inputI"
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        onChange={(e) => props.handleChangeInterview(e)}
                                    />
                                </div>

                                <div>
                                    <textarea className="reviewTextarea"
                                        placeholder="Review"
                                        type="text"
                                        name="review"
                                        onChange={(e) => props.handleChangeInterview(e)}
                                    ></textarea>
                                </div>

                                <div>
                                    <label>Interview Date</label>
                                    <input className="inputI"
                                        type="date"
                                        name="date"
                                        onChange={(e) => props.handleChangeInterview(e)}
                                    />
                                </div>

                                <div>
                                    <input className="inputI"
                                        placeholder="Position"
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
                    </Scrollbars>
                </div>
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
    showHide: (payload) => dispatch(actions.showHide(payload)),
    showMore: (payload) => dispatch(actions.showMore(payload)),
    lessMore: (payload) => dispatch(actions.lessMore(payload)),
    hideFirstOne: (payload) => dispatch(actions.hideFirstOne(payload)),
    theIndex: (payload) => dispatch(actions.theIndex(payload)),
    divBlockNone: (payload) => dispatch(actions.divBlockNone(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AllInterviewR);
