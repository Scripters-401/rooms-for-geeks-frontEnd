/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/signINUPReducer.js'

import Show from '../show.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.scss';

const Signup = props => {


  const handleSubmitFun = e => {
    e.preventDefault();

    props.signup(
      props.sign.username,
      props.sign.password,
      props.sign.email,
      props.sign.role,
      props.sign.name,
      props.sign.major);
  }

  return (
    <>
      <Show condition={!props.sign.loggedIn}>
        <div className="signupF">
          <form onSubmit={(e) => handleSubmitFun(e)}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={(e) => props.handleChange(e)}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={(e) => props.handleChange(e)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={(e) => props.handleChange(e)}
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                placeholder="Role"
                name="role"
                onChange={(e) => props.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={(e) => props.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Major</label>
              <input
                type="text"
                className="form-control"
                placeholder="Major"
                name="major"
                onChange={(e) => props.handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </Show>
    </>
  )

}

const mapStateToProps = state => ({
  sign: state.sign
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: (e) => dispatch(actions.handleChange(e)),
  signup: (username, password, email, role, name, major) =>
    dispatch(actions.signup(username, password, email, role, name, major)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);