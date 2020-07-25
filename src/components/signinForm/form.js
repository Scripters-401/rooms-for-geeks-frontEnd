/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer'
import cookie from 'react-cookies';
// import Show from '../auth/show';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function SigninForm(props) {

    const [hide, setHide] = useState(true);
    const [animate, setAnimate] = useState('');

    function signupFun(e) {
        e.preventDefault();
        console.log('hellllo');
        setAnimate('false');
        setHide(true);
    }

    function loginFun(e) {
        e.preventDefault();
        console.log('loggggin');
        setAnimate('true');
        setHide(false);
    }

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

    const handleSubmitFunSignup = e => {
        e.preventDefault();

        props.signup(
            props.sign.username,
            props.sign.password,
            props.sign.email,
            props.sign.name,
            props.sign.major);
    }

    useEffect(() => {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        props.validateToken(token);
    }, [])

    return (
        <>
        <div className='general'>
            <div className="panel panel--static">
                <div className="panel__content left">
                    <h1 className="panel__heading">Don't have an account?</h1>
                    <p className="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>
                    <button type="button" className="btn btn--secondary signup" onClick={signupFun} >Sign up</button>
                </div>
                <div className="panel__content right">
                    <h1 className="panel__heading">Have an account?</h1>
                    <p className="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>
                    <button type="button" className="btn btn--secondary login" onClick={loginFun}>Log in</button>
                </div>

                <div className={`panel panel--sliding an${animate}`}>
                    {console.log(hide)}
                    <div className={`panel__content signup${!hide}`}>

                        <h1 className="panel__heading">Sign up</h1>
                        <form id="signup" onSubmit={(e) => handleSubmitFunSignup(e)}>
                            <input type="text" placeholder="Username" name="username" onChange={(e) => props.handleChange(e)} className="input input--name" required />
                            <input type="text" className="input input--name" placeholder="Name" name="name" onChange={(e) => props.handleChange(e)} required />
                            <input type="email" placeholder="Email" name="email" onChange={(e) => props.handleChange(e)} className="input input--email" required />
                            <input type="password" placeholder="Password" name="password" onChange={(e) => props.handleChange(e)} className="input input--password" required />
                            <input type="text" className="input input--name" placeholder="Major" name="major" onChange={(e) => props.handleChange(e)} required />

                            <button className="btn btn--primary" >Sign up</button>
                            <div>
                                <a href={props.sign.authURL} onClick={facebookOuthFun}><span><FontAwesomeIcon icon={faFacebook} size='2x' color='blue' /></span></a>
                                <a href={props.sign.authURL} onClick={googleOuthFun}><span><FontAwesomeIcon icon={faGoogle} size='2x' color="black" /></span></a>
                            </div>
                        </form>
                    </div>

                    <div className={`panel__content login${hide}`}>
                        <h1 className="panel__heading">Log in</h1>
                        <form id="login" onSubmit={(e) => handleSubmitFun(e)}>
                            <input type="text" placeholder="Username" name='username' className="input input--email" onChange={(e) => props.handleChange(e)} required />
                            <input type="text" placeholder="Password" name='password' className="input input--password" onChange={(e) => props.handleChange(e)} required />
                            <button type='submit' className="btn btn--primary">Log in</button>
                            <a href="/">Forgot password?</a>
                            <div>
                                <a href={props.sign.authURL} onClick={facebookOuthFun}><span><FontAwesomeIcon icon={faFacebook} size='2x' color='blue' /></span></a>
                                <a href={props.sign.authURL} onClick={googleOuthFun}><span><FontAwesomeIcon icon={faGoogle} size='2x' color="black" /></span></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChange: (e) => dispatch(actions.handleChange(e)),
    login: (username, password) => dispatch(actions.login(username, password)),
    validateToken: token => dispatch(actions.validateToken(token)),
    oathfun: (e) => dispatch(actions.oathfun(e)),
    signup: (username, password, email, role, name, major) =>
        dispatch(actions.signup(username, password, email, name, major))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
