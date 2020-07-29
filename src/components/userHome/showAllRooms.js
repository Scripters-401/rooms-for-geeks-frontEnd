/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Link } from 'react-router-dom';
// import { sign } from 'jsonwebtoken';

const AllRooms = props => {

    useEffect(() => {
        setTimeout(() => {
            console.log('token', props.sign.token)
            props.rooms(props.sign.token);
        }, 2000);

    }, []);

    function goToRoom(e, id) {
        // e.preventDefault();
        console.log('props.userHome.choosenRoomID', id);
        props.choosenID(id);
    }


    return (
        <>
            <div>
                <h3 className='topic'>All Rooms</h3>
            </div>
            <div className='allRooms'>
                {console.log('rooms', props.userHome.allRooms)}
                {props.userHome.allRooms.map((val, i) => {
                    return (
                        //     <button onClick={(e)=>goToRoom(e,val._id)}><Link to="/rooms" className="goToRoom" key={i}><div key={i}>
                        //     <h3>{val.roomName}</h3>
                        //     <h4>Created By: {val.cookieAdminName}</h4>
                        //     <h5>Created Time: {val.createdTime}</h5>
                        // </div></Link></button>
                        <div class='card-area-div'>
                            <section class="card-area">
                            <section class="card-section">
                                <div class="card">
                                    <div class="flip-card">
                                        <div class="flip-card__container">
                                            <div class="card-front">
                                                <div class="card-front__tp card-front__tp--city">
                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve" class="card-front__icon">
                                                        <g>
                                                            <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
                                                            <path d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                                       V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                                       c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"/>
                                                            <path d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                                       c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                                       c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                                       c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                                       c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                                       c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                                       c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                                       s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"/>
                                                            <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
                                                            <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
                                                            <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
                                                            <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
                                                        </g>
                                                    </svg>
                                                    <h2 class="card-front__heading">
                                                        {val.roomName}
                                                    </h2>
                                                </div>

                                                <div class="card-front__bt">
                                                    <p class="card-front__text-view card-front__text-view--camping">
                                                        View me
                                    </p>
                                                </div>
                                            </div>
                                            <div class="card-back">
                                                {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
                                </video> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="inside-page">
                                        <div class="inside-page__container">
                                            <h3 class="inside-page__heading inside-page__heading--camping">
                                                <p>Created By:</p>
                                                {val.cookieAdminName}
                                            </h3>
                                            <p class="inside-page__text">
                                                {val.createdTime}
                                            </p>
                                            <a class="inside-page__btn inside-page__btn--camping btn-go" onClick={(e) => goToRoom(e, val._id)}><Link to="/rooms" className="goToRoom" key={i}>View Room</ Link></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        </div>
                    )
                })}

        </div>

        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign,
    userHome: state.userHome
});

const mapDispatchToProps = (dispatch, getState) => ({
    rooms: (token) => dispatch(actions.rooms(token)),
    choosenID: (id) => dispatch(actions.roomID(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(AllRooms);
