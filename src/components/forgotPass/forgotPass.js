/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/forgotPassReducer'
import './forgotPass.scss';

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
        <p className={`msg`}>{props.newPass.msgEmail}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);