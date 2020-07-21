import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginContext } from '../context.js';
import Show from '../show.js';
import './signup.scss';

class Signup extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      role: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.signup(this.state.username, this.state.password, this.state.email, this.state.role);
  }

  render() {
    return (
      <>
        <Show condition={!this.context.loggedIn}>
          <div className="signupF">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                placeholder="Role"
                name="role"
                onChange={this.handleChange} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
          </div>
        </Show>
      </>
    )
  }

}

export default Signup;