/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
// import Slider from "react-slick";
import {connect} from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
// import Show from '../auth/show' 
import { Button } from 'react-bootstrap';
// import { sign } from 'jsonwebtoken';
// import { sign } from 'jsonwebtoken';

const UpgradeAdmin = props => {

    function upgradeFun(e){
        e.preventDefault();
        props.upgradeRole(props.sign.token,props.sign.user.id,'admin')
        console.log('role',props.sign.user.role);
        props.sign.user.role = 'admin'
        console.log('newRole',props.sign.user.role)
        
    }
    return (
        <>
            
            <Button onClick={upgradeFun}>
                Upgrade
            </Button>
            {console.log('role',props.sign.user.role)}
            
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

