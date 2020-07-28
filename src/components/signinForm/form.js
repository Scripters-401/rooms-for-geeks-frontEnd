/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer'
import cookie from 'react-cookies';
import { storage } from "../firebase";
import * as actions2 from '../../store/uploadImageReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

require('dotenv').config();

// import Show from '../auth/show';

function SigninForm(props) {

    const [hide, setHide] = useState(false);
    const [animate, setAnimate] = useState('true');

    function signupFun(e) {
        e.preventDefault();
        setAnimate('false');
        setHide(true);
    }

    function loginFun(e) {
        e.preventDefault();
        setAnimate('true');
        setHide(false);
    }

    const googleOuthFun = e => {
        
        let URL = process.env.REACT_APP_URL_GOOGLE;

        let options = {
            scope: 'email profile',
            response_type: 'code',
            redirect_uri: process.env.REACT_APP_REDIRECT_URI_G,
            client_id: process.env.REACT_APP_CLIENT_ID_G,
        };

        let QueryString = Object.keys(options).map((key) => {
            return `${key}=` + encodeURIComponent(options[key]);
        }).join('&');

        let authURL = `${URL}?${QueryString}`;
        props.oathfun(authURL);
    }

    const facebookOuthFun = e => {
        let URL2 = process.env.REACT_APP_URL_FACEBOOK;

        let options2 = {
            client_id: process.env.REACT_APP_CLIENT_ID_F,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI_F,
            state: 'scripters',
            scope: 'public_profile,email',
        };

        let QueryString2 = Object.keys(options2).map((key) => {
            return `${key}=` + encodeURIComponent(options2[key]);
        }).join('&');

        let authURL2 = `${URL2}?${QueryString2}`;
        props.oathfun(authURL2);
    }

    const handleChangePic = e => {
        if (e.target.files[0]) {
            props.setImage(e.target.files[0]);
        }
    };

    const handleSubmitFun = e => {
        e.preventDefault();
        props.login(props.sign.username, props.sign.password)
    }

    const handleSubmitFunSignup = e => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${props.upload.image.name}`).put(props.upload.image);
        uploadTask.on("state_changed", () => {
            storage
                .ref("images")
                .child(props.upload.image.name)
                .getDownloadURL()
                .then(url => {
                    props.signup(
                        props.sign.username,
                        props.sign.password,
                        props.sign.email,
                        props.sign.name,
                        props.sign.major,
                        url,
                    );
                });
        });
    }

    useEffect(() => {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        props.validateToken(token);
    }, [])

    return (
        <>
            <div className='general' id='sign'>
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
                        <div className={`panel__content signup${!hide}`}>

                            <h1 className="panel__heading">Sign up</h1>
                            <form id="signup" onSubmit={(e) => handleSubmitFunSignup(e)}>
                                <input type="text" placeholder="Username" name="username" onChange={(e) => props.handleChange(e)} className="input input--name" required />
                                <input type="text" className="input input--name" placeholder="Name" name="name" onChange={(e) => props.handleChange(e)} required />
                                <input type="email" placeholder="Email" name="email" onChange={(e) => props.handleChange(e)} className="input input--email" required />
                                <input type="password" placeholder="Password" name="password" onChange={(e) => props.handleChange(e)} className="input input--password" required />
                                <input type="text" className="input input--name" placeholder="Major" name="major" onChange={(e) => props.handleChange(e)} required />
                                <input className='ChooseImage' type="file" onChange={handleChangePic} />
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
                                <input type="password" placeholder="Password" name='password' className="input input--password" onChange={(e) => props.handleChange(e)} required />
                                <button type='submit' className="btn btn--primary">Log in</button>

                                <a href={props.sign.authURL} className='icons' onClick={facebookOuthFun}><span><FontAwesomeIcon icon={faFacebook} size='2x' color='blue' /></span></a>
                                <a href={props.sign.authURL} className='icons' onClick={googleOuthFun}><span><FontAwesomeIcon icon={faGoogle} size='2x' color="black" /></span></a>
                                <a href="/new-password">Forgot password?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    sign: state.sign,
    upload: state.upload,
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChange: (e) => dispatch(actions.handleChange(e)),
    login: (username, password) => dispatch(actions.login(username, password)),
    validateToken: token => dispatch(actions.validateToken(token)),
    oathfun: (e) => dispatch(actions.oathfun(e)),
    signup: (username, password, email, name, major, url) =>
        dispatch(actions.signup(username, password, email, name, major, url)),
    setImage: (image) => dispatch(actions2.setImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
