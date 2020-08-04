/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import cookie from 'react-cookies';

import * as actions from '../../store/roomReducer';
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
        if (height < 830) {
            props.updateChatScroll(true)
        } else {
            props.updateChatScroll(false)

        }
    }

    return (
        <>
            <div className="bodyDiv" onWheel={e => someMeothod()} >
                <div className='roomData'>
                    {props.room.redirectAfterDelete ? (<Redirect to="/user-Home" />) : null}
                    <div id="room-data">
                        <div className="quwsHead">
                            <Show condition={props.room.roomAdmin}>
                                <Auth capability="master-room">
                                    <button className='deleteRoom' onClick={e => deleteRoom()}> Delete Room</button>
                                </Auth>
                            </Show>
                            <h2 id='roon-name'>{props.room.roomData.RData && props.room.roomData.RData.roomName ? props.room.roomData.RData.roomName : null}</h2>
                           
                           <span className='like-icon heart-animation-1'></span>
                           
                            <Show condition={props.room.favOrNot}>
                                <span className={`addToFav-${props.room.favOrNot}`} onClick={e => removefromFav()}>

                                    <div class="slideThree">
                                        <input type="checkbox" value="None" id="slideThree" name="check" defaultChecked={true} />
                                        <label htmlFor="slideThree"></label>
                                    </div>

                                </span>
                            </Show>
                            <Show condition={!props.room.favOrNot}>
                                <span className={`addToFav-${props.room.favOrNot}`} onClick={e => addToFav()}>
                                    <div className="slideThree">
                                        <input type="checkbox" value="None" id="slideThree" name="check" />
                                        <label htmlFor="slideThree"></label>
                                    </div>
                                </span>
                            </Show>


                        </div>

                    </div>

                    <div className='courseData'>
                        <h2 className="courseName"> {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.courseName : null}</h2>
                        <p className="Discription"> {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.discription : null}</p>

                    </div>



                    <QA />
                    <div className="buttonRoom">
                        <Show condition={!(props.room.roomData.renderedQuiz && props.room.roomData.renderedQuiz.constructor === Object && Object.keys(props.room.roomData.renderedQuiz).length === 0)}>
                            <Link className="aHrefLinkdds" to="/take-quiz"> <button className="TakeQuizAndToto" >Take Quiz</button></Link>
                        </Show>

                        <Show condition={(props.room.roomData.courseData && props.room.roomData.courseData.tutorial)}>
                            <a className="aHrefLinkdds" href={`https://${props.room.roomData.courseData && props.room.roomData.courseData.tutorial ? props.room.roomData.courseData.tutorial : null}`} rel="noopener noreferrer" target='_blank'><button className="TakeQuizAndToto" >Tutorial</button></a>
                        </Show>
                    </div>
                </div>
                <div className="chatSet" >
                    <Chat />
                </div>
                <div className="roomDataFor">
                    <p className=" CreatedBy">
                        Created By :
                        {props.room.adminName}
                    </p>
                    <p className=" CreatedByOn">
                        On :
                        {props.room.roomData && props.room.roomData.RData && props.room.roomData.RData.createdTime ? props.room.roomData.RData.createdTime.slice(0, 10) : null}
                    </p>
                    <p className="Topic">Topic: {props.room.roomData && props.room.roomData.courseData ? props.room.roomData.courseData.topic : null}</p>
                    {/* <p>
                        Public: {props.room.roomData && props.room.roomData.RData ? `${props.room.roomData.RData.public || props.room.roomData.RData.publicc}` : null}
                    </p> */}

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

});


export default connect(mapStateToProps, mapDispatchToProps)(Room);
