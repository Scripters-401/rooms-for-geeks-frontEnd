/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import cookie from 'react-cookies';

import * as actions from '../../store/roomReducer';
import * as chatActions from '../../store/chat';
import * as loader from '../../store/signINUPReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Show from '../auth/show'
import Auth from '../auth/auth'
import QA from './questions&answ'
// import Quiz from './answerQuiz'
import Chat from './chat'
import '../../reset.css';
import './room.scss'
import { Redirect, Link } from 'react-router-dom';




const Room = props => {

    useEffect(() => {
        // setTimeout(() => {
        const cookieroomID = cookie.load('roomID');
        let x = props.userHome.choosenRoomID || cookieroomID;
        props.updateChoosenRoomIDSocket(x)
        window.scrollTo(0, 0)

        // }, 200);

    }, [])


    useEffect(() => {
        // setTimeout(() => {
        cookie.save('roomID', props.room.choosenRoomIDSocket)
        props.getRoom(props.sign.token, props.room.choosenRoomIDSocket);
        let fav = props.userInfo.user && props.userInfo.user.favRooms ? props.userInfo.user.favRooms.includes(props.room.choosenRoomIDSocket) : null;
        props.updateFavOrNot(fav)
        props.updateLoader(false);

        // }, 500);

    }, [props.room.choosenRoomIDSocket])
    useEffect(() => {
        props.updateRoomAdminBool(props.userInfo.user.username)

    }, [props.room.adminName])


    const addToFav = e => {
        props.addToFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        props.userInfo.user.favRooms.push(props.userHome.choosenRoomID)
        props.updateFavOrNot(true)

    }

    const removefromFav = e => {
        props.userInfo.user.favRooms.splice(props.userInfo.user.favRooms.indexOf(props.userHome.choosenRoomID), 1)
        props.removefromFav(props.sign.token, props.userInfo.user._id, props.userHome.choosenRoomID);
        props.updateFavOrNot(false)

    }
    const deleteRoom = e => {
        props.deleteRoom(props.sign.token,
            props.userInfo.user.username,
            props.userInfo.user._id,
            props.userHome.choosenRoomID,
            props.room.roomData.courseData._id);
        props.room.redirectAfterDelete = true;

    }

    const someMeothod = () => {
        let z = document.body.scrollHeight;
        let x = window.scrollY
        let height = document.body.scrollHeight - window.scrollY
        if (height < 890) {
            props.updateChatScroll(true)
        } else {
            props.updateChatScroll(false)

        }
    }

    return (
        <>
            {/* {onScroll=e =>someMeothod()} */}
            <div className="bodyDiv">
                <div className='roomData' onWheel={e => someMeothod()}>
                    <div className="containerRoom">
                        {props.room.redirectAfterDelete ? (<Redirect to="/user-Home" />) : null}
                        <div id="room-data">
                            <div className="quwsHead">

                                <h2 id='roon-name'>{props.room.roomData.RData && props.room.roomData.RData.roomName ? props.room.roomData.RData.roomName : null} room</h2>
                                <Show condition={props.room.roomAdmin}>
                                    <Auth capability="master-room">
                                        <button className='deleteRoom' onClick={e => deleteRoom()}> Delete Room</button>
                                    </Auth>
                                </Show>
                            </div>
                        </div>
                        {/* <div className="roomDataFor">
                            <p className="Topic">Topic: {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.topic : null}</p>
                            <p className=" CreatedBy">
                                Created By: {props.room.adminName} at {props.room.roomData && props.room.roomData.RData && props.room.roomData.RData.createdTime ? props.room.roomData.RData.createdTime.slice(0, 10) : null}
                            </p> */}
                        {/* <p className=" CreatedByOn">
                                On :
                        {props.room.roomData && props.room.roomData.RData && props.room.roomData.RData.createdTime ? props.room.roomData.RData.createdTime.slice(0, 10) : null}
                            </p> */}

                        {/* <p>
                        Public: {props.room.roomData && props.room.roomData.RData ? `${props.room.roomData.RData.public || props.room.roomData.RData.publicc}` : null}
                    </p> */}

                        {/* </div> */}

                        <div className='courseData'>
                            <h2 className="courseName">Course {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.courseName : null}</h2>
                            <p className="Discription">Discription {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.discription : null}</p>

                        </div>

                        <div className='buttonsHeaderRoom'>
                            <Show condition={props.room.favOrNot}>
                                <button className={`roomHeaderButtonStyle`} onClick={e => removefromFav()}>

                                    <span>Favourite </span>
                                    <img className='loveButton' src="https://img.icons8.com/officel/64/000000/hearts.png" />

                                </button>
                            </Show>
                            <Show condition={!props.room.favOrNot}>
                                <button className={`roomHeaderButtonStyle `} onClick={e => addToFav()}>

                                    <span>Favourite </span>
                                    <img className='loveButton' src="https://img.icons8.com/small/64/000000/hearts.png" />
                                </button>
                            </Show>

                            <button className='roomHeaderButtonStyle'>
                                Share
                                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" >
                                    <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z" /></svg>



                            </button>
                        </div>

                    </div>



                    <div className="QA-Component">
                        <aside className="quiaAndTutorial">

                            <div className="buttonRoom">
                                <Show condition={!(props.room.roomData.renderedQuiz && props.room.roomData.renderedQuiz.constructor === Object && Object.keys(props.room.roomData.renderedQuiz).length === 0)}>
                                    <Link className="aHrefLinkdds" to="/take-quiz"> <button className="TakeQuizAndToto" >Take Quiz</button></Link>
                                </Show>

                                <Show condition={(props.room.roomData.courseData && props.room.roomData.courseData.tutorial)}>
                                    <a className="aHrefLinkdds" href={`https://${props.room.roomData.courseData && props.room.roomData.courseData.tutorial ? props.room.roomData.courseData.tutorial : null}`} rel="noopener noreferrer" target='_blank'><button className="TakeQuizAndToto" >Tutorial</button></a>
                                </Show>
                            </div>
                        </aside>
                        <div className="just-QA"><QA /></div>



                        <div className="chatSet" >
                            <div className='chatDiv'>


                                <Chat />



                                <div className={`chatIcon-${props.chat.open}`} onClick={e => props.openCloseChat()} style={props.room.scroll ? {
                                    position: 'absolute',
                                    bottom: '0',
                                    width: '235px'
                                } : { position: 'fixed', right: '0' }}>


                                    <svg class="chat-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve">
                                        <g class="chat">
                                            <path class="chat-bg" fill-rule="evenodd" clip-rule="evenodd" fill="#ED9C5C" d="M133.295,67.352h345.409c36.27,0,65.942,29.674,65.942,65.939
            v345.415c0,36.268-29.673,65.941-65.942,65.941H133.295c-36.269,0-65.942-29.674-65.942-65.941V133.292
            C67.353,97.026,97.026,67.352,133.295,67.352z"/>
                                            <g class="computer">
                                                <g>
                                                    <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#4E4E4E" points="193.796,459.066 263.994,459.066 296.898,518.674 
                    160.893,518.674 		"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#47749C" d="M63.48,226.429h330.829c9.312,0,16.927,7.617,16.927,16.926
                    v213.897c0,9.309-7.615,16.926-16.927,16.926H63.48c-9.307,0-16.924-7.617-16.924-16.926V243.355
                    C46.556,234.045,54.171,226.429,63.48,226.429z"/>
                                                    <g>
                                                        <circle fill-rule="evenodd" clip-rule="evenodd" fill="#F5F6F6" cx="390.683" cy="459.219" r="2.196" />
                                                        <circle fill-rule="evenodd" clip-rule="evenodd" fill="#F5F6F6" cx="382.1" cy="459.219" r="2.196" />
                                                        <circle fill-rule="evenodd" clip-rule="evenodd" fill="#F5F6F6" cx="373.518" cy="459.219" r="2.196" />
                                                    </g>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#47749C" d="M27.003,500.658h403.782c4.954,0,9.008,4.054,9.008,9.006l0,0
                    c0,4.954-4.054,9.007-9.008,9.007H27.003c-4.953,0-9.007-4.053-9.007-9.007l0,0C17.996,504.712,22.05,500.658,27.003,500.658z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#4E4E4E" d="M439.793,509.666c0,4.954-4.054,9.008-9.008,9.008H27.003
                    c-4.955,0-9.007-4.054-9.007-9.008H439.793z"/>
                                                </g>
                                                <rect x="57.79" y="236.303" fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" width="342.211" height="207.65" />
                                                <rect x="80.505" y="236.303" fill-rule="evenodd" clip-rule="evenodd" fill="#92BDE3" width="296.78" height="17.982" />
                                                <rect x="159.835" y="265.222" fill-rule="evenodd" clip-rule="evenodd" fill="#ED7B5C" width="138.12" height="27.391" />
                                                <rect x="80.504" y="324.683" fill-rule="evenodd" clip-rule="evenodd" fill="#5997CC" width="296.781" height="75.507" />
                                                <rect x="137.506" y="303.322" fill-rule="evenodd" clip-rule="evenodd" fill="#92BDE3" width="182.779" height="11.48" />
                                                <rect x="98.481" y="415.349" fill-rule="evenodd" clip-rule="evenodd" fill="#FFD480" width="74.521" height="28.604" />
                                                <rect x="191.635" y="415.349" fill-rule="evenodd" clip-rule="evenodd" fill="#ED7B5C" width="74.522" height="28.604" />
                                                <rect x="284.788" y="415.349" fill-rule="evenodd" clip-rule="evenodd" fill="#92BDE3" width="74.522" height="28.604" />
                                                <g>
                                                    <path fill="#FFFFFF" d="M361.096,357.58c-0.471-0.593-0.372-1.458,0.22-1.929c0.596-0.473,1.458-0.373,1.931,0.219l3.559,4.454
                    c0.029,0.04,0.061,0.082,0.087,0.123l0.004,0.007l0.036,0.057l0.025,0.048l0.007,0.012l0.023,0.052l0.014,0.031
                    c0.021,0.048,0.037,0.096,0.052,0.144l0.005,0.014c0.018,0.062,0.03,0.125,0.039,0.188l0.003,0.011
                    c0.006,0.048,0.011,0.094,0.011,0.144v0.031v0.016v0.03c0,0.05-0.005,0.097-0.011,0.144l-0.003,0.011
                    c-0.009,0.062-0.021,0.127-0.039,0.188l-0.005,0.014c-0.012,0.049-0.031,0.096-0.052,0.145l-0.014,0.031l-0.023,0.051
                    l-0.007,0.013l-0.025,0.048l-0.036,0.057l-0.004,0.006c-0.026,0.044-0.058,0.083-0.087,0.123l-3.559,4.454
                    c-0.473,0.594-1.335,0.692-1.931,0.222c-0.592-0.473-0.69-1.339-0.22-1.93l2.886-3.613L361.096,357.58z"/>
                                                    <path fill="#0000" d="M94.544,355.87c0.472-0.592,1.335-0.691,1.929-0.219c0.593,0.471,0.692,1.336,0.219,1.929l-2.884,3.611
                    l2.884,3.613c0.473,0.591,0.374,1.457-0.219,1.93c-0.594,0.471-1.458,0.372-1.929-0.222l-3.557-4.454
                    c-0.033-0.04-0.063-0.079-0.089-0.123l-0.005-0.006l-0.033-0.057l-0.026-0.048l-0.007-0.013l-0.024-0.051l-0.013-0.031
                    c-0.021-0.048-0.038-0.096-0.052-0.145l-0.004-0.014c-0.019-0.061-0.031-0.126-0.041-0.188l-0.001-0.011
                    c-0.007-0.047-0.011-0.094-0.012-0.144v-0.03v-0.016v-0.031c0-0.05,0.005-0.096,0.012-0.144l0.001-0.011
                    c0.01-0.063,0.021-0.126,0.041-0.188l0.004-0.014c0.014-0.048,0.032-0.096,0.052-0.144l0.013-0.031l0.024-0.052l0.007-0.012
                    l0.026-0.048l0.033-0.057l0.005-0.007c0.026-0.041,0.056-0.083,0.089-0.123L94.544,355.87z"/>
                                                </g>
                                            </g>
                                            <g class="baloon">
                                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#00000" d="M259.333,183.868H463.53c21.441,0,38.983,11.768,38.983,26.147
                v136.968c0,14.382-17.542,26.148-38.983,26.148H259.333c-21.441,0-38.983-11.767-38.983-26.148V210.016
                C220.35,195.636,237.892,183.868,259.333,183.868z M415.667,417.6l48.25-44.468h-33.75L415.667,417.6z"/>
                                                <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ED9C5C" cx="293.5" cy="278.5" r="18.5" />
                                                <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ED9C5C" cx="359.311" cy="278.5" r="18.5" />
                                                <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ED9C5C" cx="427.5" cy="278.5" r="18.5" />
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>





        </>
    )
}


const mapStateToProps = state => ({
    sign: state.sign,
    room: state.room,
    userInfo: state.userInfo,
    userHome: state.userHome,
    chat: state.chat,
});

const mapDispatchToProps = (dispatch, getState) => ({
    getRoom: (token, id) => dispatch(actions.getRoom(token, id)),
    addToFav: (token, userid, roomID) => dispatch(actions.addToFav(token, userid, roomID)),
    removefromFav: (token, userid, roomID) => dispatch(actions.removefromFav(token, userid, roomID)),
    deleteRoom: (token, name, userid, roomID, courseID) => dispatch(actions.deleteRoom(token, name, userid, roomID, courseID)),
    updateRoomAdminBool: (userid) => dispatch(actions.updateRoomAdminBool(userid)),
    updateChoosenRoomIDSocket: (userid) => dispatch(actions.updateChoosenRoomIDSocket(userid)),
    updateFavOrNot: (bool) => dispatch(actions.updateFavOrNot(bool)),
    updateLoader: (bool) => dispatch(loader.updateLoader(bool)),
    updateChatScroll: (bool) => dispatch(actions.updateChatScroll(bool)),
    openCloseChat: () => dispatch(chatActions.openCloseChat()),

});


export default connect(mapStateToProps, mapDispatchToProps)(Room);
