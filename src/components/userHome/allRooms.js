/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
// import { sign } from 'jsonwebtoken';

const AllRooms = props => {

    useEffect(()=>{
        setTimeout(() => {
            console.log('token',props.sign.token)
            props.rooms(props.sign.token);  
        }, 2000);

    },[]);
     
    let max = props.userHome.allRooms.length-3;
    let randomNumber =  Math.floor((max) * Math.random());
    console.log('random',randomNumber);
    return (
        <>
            <div>
                <h3>Suggested Rooms:</h3>
            </div>
            <div className='allRooms'>
                {console.log('rooms',props.userHome.allRooms)}
            {props.userHome.allRooms.slice(randomNumber,randomNumber+3).map((val,i) =>{
                return(
                    <div key={i}>
                        <h3>{val.roomName}</h3>
                        <h4>Created By: {val.cookieAdminName}</h4>
                        <h5>Created Time: {val.createdTime}</h5>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(AllRooms);
