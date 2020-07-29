/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/postRoomReduser'
import './room.scss';

const RoomForm = props => {

    // useEffect(() => {
    //     props.roomPost(
    //         props.sign.token,
    //         props.sign.user.id,
    //         props.thePostRoom.roomName,
    //         props.thePostRoom.publicc,
    //         props.thePostRoom.password,
    //         props.thePostRoom.adminName,
    //         props.thePostRoom.members,
    //     )
    // }, [props.sign.token, props.sign.user.id])

    const testPrivet = e =>{
        console.log('e.targ',e.target.value);
        let x =!(!e.target.value);
        if(e.target.value == "true"){
            props.handlePrivetPass(false);
        }
        else{
            props.handlePrivetPass(true);
        }
console.log('xxx',x);
        props.handleChangeRoom(e);
        // props.handlePrivetPass(x);
    }
    const handleSubmitFun = e => {
        e.preventDefault();
        console.log(props.thePostRoom.publicc);
        props.roomPost(
            props.sign.token,
            props.sign.user.id,
            props.thePostRoom.roomName,
            props.thePostRoom.publicc,
            props.thePostRoom.password,

            // props.thePostRoom.adminName,
            props.userInfo.user.username,
            props.thePostRoom.members,

        );

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
                            <input className="description"
                                type="text"
                                name="Description"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Description"
                            />
                            <input className="input"
                                type="text"
                                name="Topic"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Topic"
                            />
                            <input className="input"
                                type="text"
                                name="Tutorial Link"
                                onChange={(e) => props.handleChangeRoom(e)}
                                placeholder="Tutorial Link"
                            />
                            <button className="addQuiz">Add Quiz</button>

                            <div className="radioButton">
                                <div className="radioPriv">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)} value={true} type="radio" checked id="public" name="publicc"  />
                                    <label for="public">Public</label><br></br>
                                </div>
                                <div className="radioPublic">
                                    <input className="radioBut" onClick={(e) => testPrivet(e)}  value={false} type="radio" id="privet" name="publicc" />
                                    <label for="privet">Privet</label>
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

            {/* {console.log('pppppppppppp',props)}
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Create Room</h3>

                    <div>
                        <label>roomName</label>
                        <input
                            type="text"
                            name="roomName"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <div>
                        <label>public</label>
                        <input
                            type='text'
                            name="publicc"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <div>
                        <label>password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => props.handleChangeRoom(e)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div> */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);