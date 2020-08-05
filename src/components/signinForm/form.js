/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/signINUPReducer'
import cookie from 'react-cookies';
import { storage } from "../firebase";
import * as actions2 from '../../store/uploadImageReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import './form.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Modal } from 'react-bootstrap';
require('dotenv').config();


function SigninForm(props) {

    const [hide, setHide] = useState(false);
    const [animate, setAnimate] = useState('true');

    function privacyPolicy(e){
        e.preventDefault();
        Swal.fire({
  
            title: '<strong>Privacy Policy</strong>',
            width:700,
            html:
              '<b>Privacy Statement for Rooms For Geeks</b><br><br>'+
              '<h7>The following statements describes the privacy practices for Rooms For Geeks:</h7><br>'+'<li>We do not share any personal information from our users</li>'+'<li>Visits are logged for aggregate statistics and diagnosis</li>'+'<li>Security settings protect the misuse of sensitive information</li>'+'<b>Personal User Information</b><br>'+'Rooms For Geeks requires user registration. Users are free to create an account in Rooms For Geeks, and navigate all its pages.<br>'+'<b>Cookies</b><br>'+'Our website uses cookies, like almost all websites. Cookies are small text files that are placed on your computer or mobile phone when you browse websites, to help provide you with the best experience we can.',
            showCloseButton: false,
            confirmButtonText: 'OK',
            confirmButtonColor: '#416760',
            focusConfirm: false,
            
          })
    }

    function termsOfService(e){
        e.preventDefault();
        Swal.fire({
  
            title: '<strong>Term Of Service </strong>',
            width:700,
            html:'<li>The Terms constitute the whole legal agreement between you and Rooms For Geeks and govern your use of the Services (but excluding any services which Rooms For Geeks may provide to you under a separate written agreement), and completely replace any prior agreements between you and Rooms For Geeks in relation to the Services.</li><br>'+'<li>You agree that Rooms For Geeks may provide you with notices, including those regarding changes to the Terms, by email, regular mail, or postings on the Services.</li><br>'+'<li>If any court of law, having the jurisdiction to decide on this matter, rules that any provision of these Terms is invalid, then that provision will be removed from the Terms without affecting the rest of the Terms. The remaining provisions of the Terms will continue to be valid and enforceable.</li>',
              
            showCloseButton: false,
            confirmButtonText: 'OK',
            confirmButtonColor: '#416760',
            focusConfirm: false,
            
            
            
          })
    }

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
        props.updateLoader(true);
        props.login(props.sign.username, props.sign.password)
        setTimeout(() => {

            props.updateLoader(false);
        }, 1000);
        

    }

    const handleSubmitFunSignup = e => {
        e.preventDefault();
        if (props.upload.image) {
        props.updateLoader(true);

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
        else {
            props.signup(
                props.sign.username,
                props.sign.password,
                props.sign.email,
                props.sign.name,
                props.sign.major,

            );
        }
        props.updateLoader(false);

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
                        <p className="panel__copy">You can join us now by creating a new account on our website ! </p>
                        <button type="button" className="btn btn--secondary signup" onClick={signupFun} >Sign up</button>
                    </div>
                    <div className="panel__content right">
                        <h1 className="panel__heading">Have an account?</h1>
                        <p className="panel__copy">Welcome back in Rooms For Geeks !</p>
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
                                <div className='checkBoxDiv'>
                                    <label className="bubble" htmlFor='bubble'>
                                        <input type="checkbox" name="terms" value="terms" id="bubble" required />
                                    Accept <span><a className="terms" href='/' onClick={(e)=>termsOfService(e)}>Terms of Service</a></span> and <span><a className="terms" href='/' onClick={(e)=>privacyPolicy(e)}>Privacy Policy</a></span>
                                    </label>
                                </div>
                                <p className="errorMsg">{props.sign.errorMsgSignUP}</p>

                                <div className="oAut">

                                    <button className="btn btn--primary" >Sign up</button>
                                    <p className="oauthIcon">Or you can signUp using</p>
                                    <a className="oauthIcon" href={props.sign.authURL} onClick={facebookOuthFun}><span><FontAwesomeIcon icon={faFacebookF} size='2x' color='blue' /></span></a>
                                    <a href={props.sign.authURL} className="oauthIcon" onClick={googleOuthFun}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="30px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg></a>
                                </div>
                            </form>
                        </div>

                        <div className={`panel__content login${hide}`}>
                            <h1 className="panel__heading">Log in</h1>
                            <form id="login" onSubmit={(e) => handleSubmitFun(e)}>
                                <input type="text" placeholder="Username" name='username' className="input input--email" onChange={(e) => props.handleChange(e)} required />
                                <input type="password" placeholder="Password" name='password' className="input input--password" onChange={(e) => props.handleChange(e)} required />
                                <p className="errorMsg">{props.sign.errorMsg}</p>
                                <div className="oAut">
                                    <button type='submit' className="btn btn--primary">Log in</button>
                                    <p className="oauthIcon">Or you can signIn using</p>

                                    <a href={props.sign.authURL} className="oauthIcon" onClick={facebookOuthFun}><span><FontAwesomeIcon icon={faFacebookF} size='2x' color='blue' /></span></a>
                                    <a href={props.sign.authURL} className="oauthIcon" onClick={googleOuthFun}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="30px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg></a>
                                </div>

                                <Link className="terms" to="/request-password">Forgot password?</Link>

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
    updateLoader: (bool) => dispatch(actions.updateLoader(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
