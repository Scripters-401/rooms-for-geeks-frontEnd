/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/signINUPReducer.js'

import cookie from 'react-cookies';
import Show from '../show.js';
import { Form, Button, Navbar, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.scss';

const Login = props => {


    const googleOuthFun = e => {
        let URL = 'https://accounts.google.com/o/oauth2/v2/auth';

        let options = {
            scope: 'email profile',
            response_type: 'code',
            redirect_uri: 'https://rooms-for-geeks.herokuapp.com/oauth',
            client_id: '676776904076-qucvccg4ccfa0bqbbn06ooer1cegib5a.apps.googleusercontent.com',
        };

        let QueryString = Object.keys(options).map((key) => {
            return `${key}=` + encodeURIComponent(options[key]);
        }).join('&');

        let authURL = `${URL}?${QueryString}`;
        props.oathfun(authURL);
    }

    const facebookOuthFun = e => {
        let URL2 = 'https://www.facebook.com/v7.0/dialog/oauth';

        let options2 = {
            client_id: '715443139210826',
            redirect_uri: 'https://rooms-for-geeks.herokuapp.com/oauth2',
            state: 'scripters',
            scope: 'public_profile,email',
        };

        let QueryString2 = Object.keys(options2).map((key) => {
            return `${key}=` + encodeURIComponent(options2[key]);
        }).join('&');

        let authURL2 = `${URL2}?${QueryString2}`;
        props.oathfun(authURL2);
    }

    const handleSubmitFun = e => {
        e.preventDefault();
        props.login(props.sign.username, props.sign.password)

    }

    useEffect(() => {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        props.validateToken(token);
    }, [])
    return (
        <>
            <a href={props.sign.authURL} onClick={googleOuthFun}> goooooogle</a>
            <a href={props.sign.authURL} onClick={facebookOuthFun}> facebook</a>
            {/* <Show condition={props.sign.loggedIn}>
                <button className="signout" onClick={props.logout}>Logout</button>
            </Show> */}
            <Show condition={!props.sign.loggedIn}>

                <Navbar className="swish-justify-content-between justify-content-between">
                    <Form inline onSubmit={(e) => handleSubmitFun(e)}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="username"
                                onChange={(e) => props.handleChange(e)}

                                className="signinI"
                            />
                            <FormControl
                                type="password"
                                placeholder="Password"
                                className=" mr-sm-2"
                                name="password"
                                onChange={(e) => props.handleChange(e)}
                            />
                            <Button type="submit">Login</Button>
                        </InputGroup>
                    </Form>
                </Navbar>
            </Show>
        </>
    )

}

const mapStateToProps = state => ({
    sign: state.sign
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChange: (e) => dispatch(actions.handleChange(e)),
    login: (username, password) => dispatch(actions.login(username, password)),
    validateToken: token => dispatch(actions.validateToken(token)),
    oathfun: (e) => dispatch(actions.oathfun(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);