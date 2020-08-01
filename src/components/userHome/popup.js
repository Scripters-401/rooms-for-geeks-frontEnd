import React, { useState } from 'react'
import bcrypt from 'bcryptjs'
import { connect } from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Button, Modal } from 'react-bootstrap';
// var bcrypt = require('bcrypt');
const Popup = props => {
    const [smShow, setSmShow] = useState(false);
    

    async function handleChangePass(e) {
        // e.preventDefault();
        console.log('inputtttttt', e.target.value);
        props.roomPassword(e.target.value);
    }
    async function compare(e) {
        // e.preventDefault();
        console.log('props input password', props.userHome.roomPrivatePass);
        props.userHome.allRooms.forEach(async val =>{
            if(val.roomName === 'real'){
                console.log('real password',val.password);
                let koo =val.password;
                let valid = await bcrypt.compare(props.userHome.roomPrivatePass, koo);
                console.log('resulttttttsssss',valid);
            }
        })
        

        
    }

    return (
        <>
            <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Private Room
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type='password' name='pass' onChange={(e) => handleChangePass(e)} />
                        <Button onClick={compare}>View Room</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign,
    userHome: state.userHome
});
const mapDispatchToProps = (dispatch, getState) => ({
    showAllFun: () => dispatch(actions.showAllFun()),
    roomPassword: (pass) => dispatch(actions.roomPassword(pass))

});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);



