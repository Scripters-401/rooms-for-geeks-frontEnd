/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/forgotPassReducer'
import '../rooms/room.scss';
const ConfirmEmail = props => {
    window.scrollTo(0, 0)

    const handleSubmitFun = e => {
        e.preventDefault();

        props.forgotPass(
            props.newPass.emailToFound,
            props.newPass.newPassword,
            props.newPass.confirmEmail
        );
    }

    let cssMsg;
    if (props.newPass.msgEmail === 'An email has been sent to change your password.') cssMsg = 'green';
    else cssMsg = 'red';

    return (
        <>
         <div className="allInall">
                <div className="wrapper ">
                    <div className="container">
                        <h1 className="nameOfForm">Change Password</h1>
                        <p className={`msg-${cssMsg}`}>{props.newPass.msgEmail}</p>
                        <form className="form" onSubmit={(e) => handleSubmitFun(e)}>
                            <input className="input"
                                type="email"
                                name="emailToFound"
                                onChange={(e) => props.handleForgotPass(e)}
                                placeholder="Your Email"
                            />
                           
                            <input className="input"
                                type="confirmEmail"
                                name="confirmEmail"
                                onChange={(e) => props.handleForgotPass(e)}
                                placeholder="Confirm Email"
                            />                       
                            <button className="button" type="submit" id="login-button">SEND!</button>
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
        </>
    )
}

const mapStateToProps = state => ({
    newPass: state.newPass
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleForgotPass: (e) => dispatch(actions.handleForgotPass(e)),

    forgotPass: (emailToFound, newPassword, confirmEmail) =>
        dispatch(actions.forgotPass(emailToFound, newPassword, confirmEmail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);