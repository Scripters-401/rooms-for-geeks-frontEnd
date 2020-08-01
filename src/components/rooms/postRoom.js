/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/postRoomReduser'
// import * as action from '../../store/postCourseReducer'
import './room.scss';

const RoomForm = props => {


    const testPrivet = e =>{
        let x =!(!e.target.value);
        if(e.target.value == "true"){
            props.handlePrivetPass(false);
        }
        else{
            props.handlePrivetPass(true);
        }
        props.handleChangeRoom(e);
    }
    const handleSubmitFun = e => {
        e.preventDefault();
        console.log('roooooo', props.thePostRoom);
        console.log('hhh', props.thePostRoom.roomName,
        props.thePostRoom.publicc,
        props.thePostRoom.password,
        props.userInfo.user.username,
        props.thePostRoom.members);
        props.roomPost(
            props.sign.token,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,
            props.userInfo.user.username,
            props.thePostRoom.members,
        );
        
    //     props.coursePost(
    //     props.sign.token,
    //     props.thePostRoom.courseName,
    //     props.thePostRoom.topic,
    //     props.thePostRoom.discription,
    //     props.thePostRoom.tutorial,
    //     props.userInfo.user._id,
    //     props.thePostRoom.newRoomId,
    //    ) 
    }

    return (
        <>
            <div className="allInall">
                <div className="wrapper ">
                    <div className="container">
                        <h1 className="nameOfForm">Create Room</h1>

                        <form className="form" onSubmit={(e) => handleSubmitFun(e)}>
                            <input className="input"
                                type="text"
                                name="roomName"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="roomName"
                            />
                            <input className="input"
                                type="text"
                                name="courseName"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="courseName"
                            />
                            
                            <input className="input"
                                type="text"
                                name="Topic"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Topic"
                            />
                            <input className="input"
                                type="text"
                                name="tutorial"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Tutorial Link"
                            />
                            <input className="description"
                                type="text"
                                name="Description"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Description"
                            />
                            <button className="addQuiz">Add Quiz</button>

                            <div className="radioButton">
                                <div className="radioPriv">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)} value={true} type="radio"  id="public" name="publicc"  />
                                    <label for="public">Public</label><br></br>
                                </div>
                                <div className="radioPublic">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)}  value={false} type="radio" id="privet" name="publicc" />
                                    <label for="privet">Private</label>
                                </div>
                            </div>

                            <input className={`pass${props.thePostRoom.privetRoomPass}`}
                                type="password"
                                name="password"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Password"
                            />

                            <button className="button" type="submit" id="login-button">CREATE!</button>
                        </form>
                    </div>

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

        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    thePostRoom: state.thePostRoom,
    userInfo: state.userInfo,
  
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeRoom: (e) => dispatch(actions.handleChangeRoom(e)),


    roomPost: (token, id, roomName, publicc, password, adminName, members) =>
        dispatch(actions.roomPost(token, id, roomName, publicc, password, adminName, members)),
    
        handlePrivetPass : (value) => dispatch(actions.handlePrivetPass(value)),   

    // coursePost: (token, courseName, topic, discription, tutorial, userid, roomID) =>
    //   dispatch(action.coursePost(token, courseName, topic, discription, tutorial, userid, roomID)),   
        
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);