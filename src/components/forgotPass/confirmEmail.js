/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/forgotPassReducer'
import './confirmEmail.scss';

const ConfirmEmail = props => {

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
        <h3>Password change request</h3>
        <p className={`msg-${cssMsg}`}>{props.newPass.msgEmail}</p>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="emailToFound"
                            onChange={(e) => props.handleForgotPass(e)}
                        />
                    </div>

                    <div>
                        <label>Confirm Email</label>
                        <input
                            type="email"
                            name="confirmEmail"
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);