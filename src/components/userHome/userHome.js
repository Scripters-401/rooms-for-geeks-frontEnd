/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import MyRooms from './myRooms';
import AllRooms from './allRooms'
import Upgrade from './upgradeAdmin'
import Auth from '../auth/auth';
import Show from '../auth/show';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import ShowAll from './showAllRooms'
import Popup from './popup';
import * as actions from '../../store/userHome';
// import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';


let random = [];
const UserHome = props => {
    let randomArr = [];
    props.room.redirectAfterDelete = false;
    function hi(e) {
        e.preventDefault();
        props.searchString(e.target.value);
        props.searchOn(true);
        if (e.target.value === '') {
            // props.searchString('zzzzzzzzzzzzzzzzzzy');
            props.searchOn(false);

        }
    }
    useEffect(() => {
        setTimeout(() => {
            console.log('token', props.sign.token)
            props.rooms(props.sign.token);
            // props.courses(props.sign.token)
        }, 500);

    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    function goToRoom(e, id) {
        // e.preventDefault();
        props.choosenID(id);
    }

    function notReload(e) {
        e.preventDefault();

    }
    // function clearChange(e){
    //     e.preventDefault();
    //     props.searchOn(false);
    //     // document.getElementById('search-btn').reset();
    //     // props.searchString('');
    // }

    return (
        <>
            <div className='allByall'>
                <Show condition={props.sign.user.role === 'user'}>
                    <Upgrade /></Show>
                <div className="searchAndBut">

                    <div className='search-bar'>
                        <form onSubmit={(e) => notReload(e)}>
                            <div class="search-container">
                                <input type="text" placeholder="Search..." onChange={(e) => hi(e)} id='search-btn' />
                                <div class="search" ></div>
                            </div>
                        </form>

                    </div>

                </div>
                <Auth capability="master-room">
                    <Link to="/create-room" className="createRoom"><Button className='upgradeButton'><b>+ </b>CREATE ROOM</Button></Link>

                </Auth>
                <Show condition={props.userHome.searchActivated}>
                    {/* <div className='search'>{props.userHome.searchKey}</div> */}
                    <div>
                        <h3 className='topic'>Results</h3>
                    </div>
                    <div className='allRooms'>
                        {props.userHome.allRooms.map((val, i) => {
                            var topic = '';
                            if (!random[i]) random[i] = Math.floor(Math.random() * 10);
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
                                if (props.userHome.allCourses[i].roomID === val._id) {
                                    topic = props.userHome.allCourses[i].topic;
                                    // console.log('topiccccccc',topic);
                                    break;
                                }

                            }
                            if (val.roomName.toUpperCase().indexOf(`${props.userHome.searchKey.toUpperCase()}`) !== -1) {
                                return (
                                    <div class='card-area-div div-width'>
                                        <section class="card-area">
                                            <section class="card-section">
                                                <div class="card">
                                                    <div class="flip-card">
                                                        <div class="flip-card__container">
                                                            <div class="card-front">
                                                                <div class="card-front__tp card-front__tp--city">
                                                                    {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                                                    </svg> */}

                                                                    <img class="ccontainer" src={`${props.userHome.categoryImages[`${topic}`][random[i]]}`} alt='LOGO' />

                                                                    {/* <h2 class="card-front__heading">
                                                            {val.roomName}
                                                        </h2> */}
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
                                    <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
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
                                                            <h3 class="inside-page__heading inside-page__heading--camping name-userr">
                                                            <p className='by-textt'>By:</p>
                                                                {val.cookieAdminName}
                                                            </h3>
                                                            <p class="inside-page__text">
                                                                {val.createdTime.slice(0, 10)}
                                                            </p>
                                                            <Show condition={val.publicc}>
                                                                <Link to="/room"  key={i}><div class="inside-page__btn inside-page__btn--ski" onClick={(e) => goToRoom(e, val._id)}> View Room</div></ Link>
                                                            </Show>
                                                            <Show condition={!val.publicc}>
                                                                {/* {props.choosenID(val._id)} */}
                                                                <Popup bb={val._id}></Popup>
                                                            </Show>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </Show>

                <MyRooms />
                <Show condition={!props.userHome.showAllRooms}><AllRooms />
                    <div className='show-more'><Button onClick={props.showAllFun} className='upgradeButton'>Show More</Button></div>
                </Show>


                <Show condition={props.userHome.showAllRooms}>

                    <ShowAll />
                    <div className='show-more'><Button onClick={props.showAllFun} className='upgradeButton'>Show Less</Button></div>
                </Show>

            </div>
        </>

    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    userHome: state.userHome,
    room: state.room
});
const mapDispatchToProps = (dispatch, getState) => ({
    showAllFun: () => dispatch(actions.showAllFun()),
    searchOn: (boolean) => dispatch(actions.searchOn(boolean)),
    searchString: (str) => dispatch(actions.searchString(str)),
    rooms: (token) => dispatch(actions.rooms(token)),
    choosenID: (id) => dispatch(actions.roomID(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);