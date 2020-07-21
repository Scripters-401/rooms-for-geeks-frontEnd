import React from 'react';

import { LoginContext } from '../context.js';
import Show from '../show.js';
import { Form, Button, Navbar, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.scss';

class Login extends React.Component {

    static contextType = LoginContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <>
                <Show condition={this.context.loggedIn}>
                    <button className="signout" onClick={this.context.logout}>Logout</button>
                </Show>
                <Show condition={!this.context.loggedIn}>

                    <Navbar className="swish-justify-content-between justify-content-between">
                        <Form inline onSubmit={this.handleSubmit}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    name="username"
                                    onChange={this.handleChange}
                                    className="signinI"
                                />
                                <FormControl
                                    type="password"
                                    placeholder="Password"
                                    className=" mr-sm-2"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                <Button type="submit">Login</Button>
                            </InputGroup>
                        </Form>
                    </Navbar>
                </Show>
            </>
        )
    }

}

export default Login;