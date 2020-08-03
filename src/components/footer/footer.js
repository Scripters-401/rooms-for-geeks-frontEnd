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
                <div className="footerLogo">  <img className="logoFooter" src={logo} alt='LOGO' /></div>

                <div className="followUs">
                    <p className="follow">Follow Us  </p>
                    <div className="div1">
                        <a href="https://web.facebook.com/Rooms-For-Geeks-106373851178474/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://github.com/Scripters-401" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href="https://www.linkedin.com/feed/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    </div>
                </div>
            </div>


            <p className="right" >&copy; 2020 Scripters Group</p>
        </footer>
    )
};

export default Footer;