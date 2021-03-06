/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
// import Slider from "react-slick";
import {connect} from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Button } from 'react-bootstrap';

const UpgradeAdmin = props => {

    function upgradeFun(e){
        e.preventDefault();
        props.upgradeRole(props.sign.token,props.sign.user.id,'admin')
        props.sign.user.role = 'admin'
        
    }
    return (
        <>
            <div className='upgradePost'>
            <div> Join us as instructor and build your own rooms</div>
            <Button onClick={upgradeFun} className='upgradeButton'>
                Upgrade
            </Button>
            
            </div>
            
            
        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign,
    // userHome: state.userHome,
    
});

const mapDispatchToProps = (dispatch, getState) => ({
    // favRoom: (token,id) => dispatch(actions.favRoom(token,id)),
    // rooms: (token) => dispatch(actions.rooms(token)),
    upgradeRole: (token,id,role) => dispatch(actions.upgrade(token,id,role)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UpgradeAdmin);

