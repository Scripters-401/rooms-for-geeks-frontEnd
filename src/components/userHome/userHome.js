import React from 'react';
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


const UserHome = props => {
    props.room.redirectAfterDelete = false;

    function hi(e){
        e.preventDefault();
        console.log('obadaaa im heree');
    }

    return (
        <>
            <Show condition={props.sign.user.role === 'user'}>
                <Upgrade /></Show>
            <div className="searchAndBut">

                <div className='search-bar'>
                    <form onSubmit={(e)=>hi(e)}>
                    <div class="search-container">
                        <input type="text" placeholder="Search..."/>
                        <div class="search"></div>
                    </div>
                    </form>

                </div>
                <Auth capability="master-room">
                    <Link to="/create-room" className="createRoom"><Button >CREATE ROOM</Button></Link>
                    {/* <Redirect to="/userHome" /> */}
                </Auth>
            </div>

            <MyRooms />
            <Show condition={!props.userHome.showAllRooms}><AllRooms />
                <div className='show-more'><Button onClick={props.showAllFun}>Show More</Button></div>
            </Show>


            <Show condition={props.userHome.showAllRooms}>

                <ShowAll />
                <div className='show-more'><Button onClick={props.showAllFun} >Show Less</Button></div>
            </Show>
            

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

});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);

