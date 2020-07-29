/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Link } from 'react-router-dom';
// import { sign } from 'jsonwebtoken';

const AllRooms = props => {

    useEffect(()=>{
        setTimeout(() => {
            console.log('token',props.sign.token)
            props.rooms(props.sign.token);  
        }, 2000);

    },[]);

    function goToRoom(e,id){
        // e.preventDefault();
        console.log('props.userHome.choosenRoomID',id);
        props.choosenID(id);
    }
     
    let max = props.userHome.allRooms.length-3;
    let randomNumber =  Math.floor((max) * Math.random());
    console.log('random',randomNumber);
    return (
        <>
            <div>
                <h3 className='topic'>Random Rooms</h3>
            </div>
            <div className='allRooms'>
                {console.log('rooms',props.userHome.allRooms)}
            {props.userHome.allRooms.slice(randomNumber,randomNumber+4).map((val,i) =>{
                return(
                    <div class='card-area-div'>
                <section class="card-area">
    
                
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--ski">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 60 60" style={{enableBackground:'new 0 0 60 60'}} xmlSpace="preserve" class="card-front__icon">
                                   <g>
                                       <path d="M58.8,54.5L38.5,19.3c-0.4-0.6-1-1-1.7-1s-1.4,0.4-1.7,1L14.8,54.5c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.7,1h40.6
                                           c0.7,0,1.4-0.4,1.7-1C59.2,55.9,59.2,55.1,58.8,54.5z M36.8,24.3l5.8,10c-0.5-0.2-1.1-0.3-1.7-0.3c-2.5,0-3.7,1.5-4.6,2.5
                                           c-0.7,0.9-1,1.1-1.5,1.1s-0.8-0.2-1.5-1.1c-0.6-0.7-1.3-1.5-2.4-2.1L36.8,24.3z M20,53.5l8.9-15.4c0.5,0,0.7,0.3,1.4,1.1
                                           c0.8,1,2.1,2.5,4.6,2.5s3.7-1.5,4.6-2.5c0.7-0.9,1-1.1,1.5-1.1c0.5,0,0.8,0.2,1.5,1.1c0.8,1,2.1,2.5,4.5,2.5l6.8,11.8H20z"/>
                                       <path d="M14.7,51.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4l9.1-15.7c0.6,0.6,1.5,1.3,2.9,1.3c1.8,0,2.8-1.2,3.3-1.8
                                           c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.5,0.6,1.5,1.8,3.3,1.8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-1.9-2
                                           c-0.1-0.1-0.2-0.2-0.3-0.4c-0.5-0.6-1.5-1.8-3.3-1.8c-1.8,0-2.8,1.2-3.3,1.8c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1-0.1-0.2-0.2-0.3-0.3
                                           c-0.1-0.2-0.3-0.4-0.5-0.6l5.7-9.9l3.8,6.6c0.6,1,1.8,1.3,2.7,0.7c1-0.6,1.3-1.8,0.7-2.7L25,13.2c-0.4-0.6-1-1-1.7-1
                                           s-1.4,0.4-1.7,1l-8.4,14.5c-0.1,0.1-0.2,0.3-0.3,0.4L1.2,48.5c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2
                                           c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2C1,50,1,50,1,50.1
                                           c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
                                           c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.5,0.1c0,0,0,0,0,0
                                           c0,0,0,0,0,0c0,0,0,0,0,0H14.7z"/>
                                       <path d="M40.7,12.3h3.1l-2.2,2.2c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l2.2-2.2v3.1
                                           c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-3.1l2.2,2.2c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2h3.1
                                           c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-3.1l2.2-2.2c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L49,7.2V4
                                           c0-0.8-0.7-1.5-1.5-1.5S46,3.2,46,4v3.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l2.2,2.2h-3.1
                                           c-0.8,0-1.5,0.7-1.5,1.5S39.9,12.3,40.7,12.3z"/>
                                   </g>
                                   </svg>
                                                   <h2 class="card-front__heading">
                                                       {val.roomName}
                                                   </h2>
                                                   {/* <p class="card-front__text-price">
                                                       From £199
                                                   </p> */}
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
                                <a class="inside-page__btn inside-page__btn--ski" onClick={(e)=>goToRoom(e,val._id)}><Link to="/room" className="goToRoom" key={i}> View Room</ Link></a>
                                
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
    choosenID:(id) => dispatch(actions.roomID(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(AllRooms);




