import React from 'react';
import MyRooms from './myRooms';
import AllRooms from './allRooms'
import Upgrade from './upgradeAdmin'
import Auth from '../auth/auth';
import Show from '../auth/show';
import {connect} from 'react-redux'
// import { Redirect } from 'react-router-dom';


const UserHome = props =>{
    return(
        <>
        <Show condition={props.sign.user.role === 'user'}>
        <Upgrade /></Show>
        
        <Auth capability="master-room">
                    <button color='red'>CREATE ROOM</button>
                    {/* <Redirect to="/userHome" /> */}
                </Auth>
        <MyRooms />
        <AllRooms />

        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
});

export default connect(mapStateToProps)(UserHome);

