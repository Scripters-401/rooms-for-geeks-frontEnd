/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Link } from 'react-router-dom';
import Show from '../auth/show';
import Popup from './popup';
// import { sign } from 'jsonwebtoken';
let random = [];
let randomNumber = null;
const AllRooms = props => {
    
    useEffect(() => {
        setTimeout(() => {
            
            props.rooms(props.sign.token);
           
        }, 500);
    }, []);
    function goToRoom(e, id) {
        
        props.choosenID(id);
    }
    var allLength = props.userHome.roomsLength;
    
    let max = props.userHome.allRooms.length - 3;
   
    if (!randomNumber) randomNumber = Math.floor((max) * Math.random());
    let randomArr = [];

    
    return (
        <>
            <div>
                <h3 className='topic'>Random Rooms</h3>
            </div>
            <div className='allRooms'>
                
                {props.userHome.allRooms.slice(randomNumber, randomNumber + 4).map((val, i) => {
                    var topic = '';
                    if (!random[i]) random[i] = Math.floor(Math.random() * 10)
                    let counter = 0;
                    while (counter < 10) {

                        if (!randomArr.includes(random[i])) {
                            randomArr.push(random[i]);
                            break;
                        }
                        else {
                            random[i] = Math.floor(Math.random() * 10)
                            counter++;
                            if (counter === 10) { randomArr = []; counter = 0; }
                        }
                    }
                    for (let i = 0; i < props.userHome.allRooms.length; i++) {
                        if (props.userHome && props.userHome.allCourses && (props.userHome.allCourses[i].roomID === val._id)) {
                            topic = props.userHome.allCourses[i].topic;
                            break;
                        }
                    }
                    return (
                        <div class='card-area-div'>
                            <section class="card-area">
                                <section class="card-section">
                                    <div class="card">
                                        <div class="flip-card">
                                            <div class="flip-card__container">
                                                <div class="card-front">
                                                    <div class="card-front__tp card-front__tp--ski">
                                                        <img class="ccontainer" src={`${props.userHome.categoryImages[`${topic}`][random[i]]}`} alt='LOGO' />
                                                    </div>

                                                    <div class="card-front__bt">
                                                        <div className='p-container'><p class="card-front__text-view card-front__text-view--ski">
                                                            {val.roomName}
                                                        </p></div>
                                                        <Show condition={val.publicc === false}>

                                                            <div className='svg-lock'><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z" /></svg>
                                                            </div>
                                                        </Show>
                                                    </div>

                                                </div>

                                                <div class="card-back">
                                                    {/* <video class="video__container" autoplay muted loop>
                                                        <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                                    </video> */}
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
                                        </div>

                                        <div class="inside-page">
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading inside-page__heading--ski ">
                                                    <p className='by-textt'>By: {val.cookieAdminName}</p>
                                                    {/* <p className='name-userr'>{val.cookieAdminName}</p> */}
                                                </h3>
                                                <p class="inside-page__text">
                                                    {val.createdTime.slice(0, 10)}
                                                </p>
                                                <Show condition={val.publicc}>
                                                    <Link to="/room"  key={i}><div class="inside-page__btn inside-page__btn--ski" onClick={(e) => goToRoom(e, val._id)}> View Room</div></ Link>
                                                </Show>
                                                <Show condition={!val.publicc}>
                                                    <Popup bb={val._id}></Popup>
                                                </Show>
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