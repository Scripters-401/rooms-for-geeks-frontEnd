import React, { useState } from 'react'
import bcrypt from 'bcryptjs'
import { connect } from 'react-redux'
import './userHome.scss'
import * as actions from '../../store/userHome';
import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Show from '../auth/show';
// var bcrypt = require('bcrypt');
const Popup = props => {
    const [smShow, setSmShow] = useState(false);
    const [passCondition, setPassCondition] = useState(false);
    const [incorrect, setIncorrect] = useState(false);


    async function handleChangePass(e) {
        props.roomPassword(e.target.value);
    }
     function compare(id) {

        for (let i = 0; i < props.userHome.allRooms.length; i++) {
            
            if (props.userHome.allRooms[i]._id === id) {
                let koo = props.userHome.allRooms[i].password;
                return  bcrypt.compare(props.userHome.roomPrivatePass, koo);
            }
        }
    }
    function goToRoom(e, id) {

        compare(id).then((r) => {
            if (r) {
                props.choosenID(id);
                setPassCondition(true);
                
            }
            else{
                setIncorrect(true);
            }
        }
        )
    }
    console.log('idddddddsssss', props.userHome.choosenRoomID);
    let status=true;
    return (
        <>
            {passCondition ? <Redirect to="/room" /> : null}
            <div class="inside-page__btn inside-page__btn--ski" onClick={() => setSmShow(true)}>View Room</div>{' '}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                className='khawaaaaa'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Private Room
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type='password' name='pass' onChange={(e) => handleChangePass(e)} placeholder='password'/>
                        <Show condition={incorrect}> <span style={{color:'red'}}>Incorrect password</span></Show>
                        <Button><div class="inside-page__btn inside-page__btn--ski goToRoom" onClick={(e) => goToRoom(e, props.bb)}> View Room</div></Button>
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
    choosenID: (id) => dispatch(actions.roomID(id)),
    roomPassword: (pass) => dispatch(actions.roomPassword(pass))

});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);



