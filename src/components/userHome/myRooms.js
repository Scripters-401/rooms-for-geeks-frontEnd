/* eslint-disable react-hooks/exhaustive-deps */
// // /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
// import Slider from "react-slick";
import {connect} from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import Show from '../auth/show' 
import { Button } from 'react-bootstrap';
// import { sign } from 'jsonwebtoken';

const MyRooms = props => {
    useEffect(()=>{
        console.log('token',props.sign.token);
        console.log('id',props.sign.user.id);
        props.favRoom(props.sign.token,props.sign.user.id);
    },[])
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
            
                <h3>Favorite Rooms:</h3>
            </div>
            <div className='favRooms'>
                {console.log('myrooms',props.userHome.myRooms)}
            {props.userHome.myRooms.slice(0,3).map((val,i) =>{
                return(
                    <div key={i}>
                        <h3>{val.roomName}</h3>
                        <h4>Created By: {val.cookieAdminName}</h4>
                        <h5>Created Time: {val.createdTime}</h5>
                    </div>
                )
            })}
            <Button>Show More</Button>
            </div>
            </Show>
            {console.log(props.userHome.checkMyRooms)}
            <Show condition={!props.userHome.checkMyRooms}>
                
                <div>
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
    favRoom: (token,id) => dispatch(actions.favRoom(token,id)),
    rooms: (token) => dispatch(actions.rooms(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyRooms);

