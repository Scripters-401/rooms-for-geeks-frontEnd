import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assest/weblogo2.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="fott">
                <div className="contactUs">
                    <p className="contactIn"> Contact Us </p>
                    <div className="emailAndNumber">
                        <p className="Tag">Email :  </p>
                        <p className="body"> scriptersgeeks@gmail.com</p>
                    </div>
                    <div className="emailAndNumber">
                        <p className="Tag">Phone Number (JOR) :  </p>
                        <p className="body"> +962 66667776</p>
                    </div>
                </div>
             
                <div className="followUs">
                    <p className="follow">Follow Us  </p>
                    <div className="div1">
                        <a href="https://web.facebook.com/Rooms-For-Geeks-106373851178474/" className="faceBook">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://github.com/Scripters-401" className="faceBook">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href="https://www.linkedin.com/feed/" className="faceBook">  <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    </div>
                </div>
            </div>


            <div className="footerLogo">  <img className="logoFooter" src={logo} alt='LOGO' />
            <p className="right" >&copy; 2020 Scripters Group</p></div>
        </footer>
    )
};

export default Footer;