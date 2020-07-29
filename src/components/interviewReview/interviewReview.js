/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/getInterviewReducer';
import * as actions2 from '../../store/interviewReviewReducer';
import './interviewReview.scss';
import $ from 'jquery';

import { TweenMax, Cubic } from "gsap";

const AllInterviewR = props => {

    var cards = $('#card-slider .slider-item').toArray();

    startAnim(cards);

    function startAnim(array) {
        if (array.length >= 4) {
            TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });

            TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

            TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

            TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut },);
        } else {
            $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
        }
    }

    function sortArray(array) {
        clearTimeout(delay);
        var delay = setTimeout(function () {
            var firstElem = array.shift();
            array.push(firstElem);
            return startAnim(array);
        }, 3000)
    }

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

                    <div className="slider-wrap">
                        <div id="card-slider" className="slider">
                            <div className="slider-item">
                                {/* <div className="animation-card_image">
                            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
                        </div> */}
                                <div className="animation-card_content">
                                    <h4 className="animation-card_content_title title-2">companyName: {data.companyName}</h4>
                                    <p className="animation-card_content_description p-2">createdTime: {formattedDate}</p>
                                    <p className="animation-card_content_description p-2">userName: {data.userName}</p>
                                    <p className="animation-card_content_description p-2">rate:
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
                                        /></p>
                                    <p className="animation-card_content_description p-2">review: {data.review}</p>
                                    <p className="animation-card_content_city">position: {data.position} / {data.date}</p>
                                </div>
                            </div>
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

            <div>

            </div>
            <div>
                <form id="theForm" onSubmit={(e) => handleSubmitFun(e)}>
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


            {/* <div class="slider-wrap">
                <div id="card-slider" class="slider">
                    <div class="slider-item">
                        <div class="animation-card_image">
                            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt="" />
                        </div>
                        <div class="animation-card_content">
                            <h4 class="animation-card_content_title title-2">Charlize Theron 5</h4>
                            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                            <p class="animation-card_content_city">New York, NY</p>
                        </div>
                    </div>
                </div>
            </div> */}
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