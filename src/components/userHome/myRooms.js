/* eslint-disable react-hooks/exhaustive-deps */
// // /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import Show from '../auth/show'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import logo from '../../assest/LOGOC.png';
// import { sign } from 'jsonwebtoken';

const MyRooms = props => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        console.log('token', props.sign.token);
        console.log('id', props.sign.user.id);
        props.favRoom(props.sign.token, props.sign.user.id);
    }, [])
    function goToRoom(e, id) {
        // e.preventDefault();
        console.log('props.userHome.choosenRoomID', id);
        props.choosenID(id);
    }
    return (
        <>
            <div className='search-bar'>
                <div class="search-container">
                    <input type="text" placeholder="Search..." />
                    <div class="search"></div>
                </div>

            </div>
            <Show condition={props.userHome.checkMyRooms}>
                <div>

                    <h3 className='topic'>Favorite Rooms</h3>
                </div>
                <div className='favRooms'>
                    {console.log('myrooms', props.userHome.myRooms)}
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {props.userHome.myRooms.map((val, i) => {
                            return (
                                <Carousel.Item style={{ 'height': "300px" }}>
                                    <div class='card-area-div'>
                                        <section class="card-area">


                                            <section class="card-section">
                                                <div class="card">
                                                    <div class="flip-card">
                                                        <div class="flip-card__container">
                                                            <div class="card-front">
                                                                <div class="card-front__tp card-front__tp--beach">
                                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 60 60" style={{enableBackground:'new 0 0 60 60'}} xmlSpace="preserve" class="card-front__icon">
                               <path d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8
                                   c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2
                                   c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8
                                   c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4
                                   l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2
                                   S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9c8.8,0,15.9,7.2,15.9,15.9
                                   C45.9,38.8,38.8,45.9,30,45.9z"/>
                               </svg>
                                                                <h2 class="card-front__heading">
                                                                    {val.roomName}
                                                                </h2>
                                                            </div>

                                                            <div class="card-front__bt">
                                                                <p class="card-front__text-view card-front__text-view--ski">
                                                                    View me
                                        </p>
                                                            </div>
                                                        </div>

                                                        <div class="card-back">
                                                            {/* <video class="video__container" autoplay muted loop>
                                        <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4">
                                    </video> */}
                                                            <img class="video__container" src={logo} alt='LOGO' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inside-page">
                                                    <div class="inside-page__container">
                                                        <h3 class="inside-page__heading inside-page__heading--ski">
                                                            <p>Created By:</p>
                                                            {val.cookieAdminName}
                                                        </h3>
                                                        <p class="inside-page__text">
                                                            {val.createdTime}
                                                        </p>
                                                        <a class="inside-page__btn inside-page__btn--ski" onClick={(e) => goToRoom(e, val._id)}><Link to="/rooms" className="goToRoom" key={i}> View Room</ Link></a>

                                                    </div>
                                                </div>
                                                </div>
                                        </section>
                                        </section>
                                    </div>

                                </Carousel.Item>
                            )
                        })}</Carousel>
                </div>
        </Show>
            { console.log(props.userHome.checkMyRooms) }
    <Show condition={!props.userHome.checkMyRooms}>

        <div className='topic'>
            No Favorite Rooms Yet.
                </div>

    </Show>

        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign,
    userHome: state.userHome
});

const mapDispatchToProps = (dispatch, getState) => ({
    favRoom: (token, id) => dispatch(actions.favRoom(token, id)),
    rooms: (token) => dispatch(actions.rooms(token)),
    choosenID: (id) => dispatch(actions.roomID(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(MyRooms);

