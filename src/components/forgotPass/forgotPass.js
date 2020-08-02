/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/forgotPassReducer'
import '../rooms/room.scss';

const ForgotPass = props => {

    const handleSubmitFun = e => {
        e.preventDefault();

        props.forgotPass(
            props.newPass.emailToFound,
            props.newPass.newPassword,
            props.newPass.confirmEmail
        );
    }

    return (
        <>
      
          <div className="allInall">
                <div className="wrapper ">
                    <div className="container">
                        <h1 className="nameOfForm">Reset Your Password !</h1>
                        <p className={`msg`}>{props.newPass.msgEmail}</p>
                        <form className="form" onSubmit={(e) => handleSubmitFun(e)}>
                            <input className="input"
                                type="email"
                                name="emailToFound"
                                onChange={(e) => props.handleForgotPass(e)}
                                placeholder="Your Email"
                            />
                           
                            <input className="input"
                                type="password"
                                name="newPassword"
                                onChange={(e) => props.handleForgotPass(e)}
                                placeholder="Password"
                            />                       
                            <button className="button" type="submit" id="login-button">RESET!</button>
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

       
        {/* <p className={`msg`}>{props.newPass.msgEmail}</p>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Set New Password</h3>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="emailToFound"
                            onChange={(e) => props.handleForgotPass(e)}
                        />
                    </div>

                    <div>
                        <label>New Password</label>
                        <input
                            type='password'
                            name="newPassword"
                            onChange={(e) => props.handleForgotPass(e)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);