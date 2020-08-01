import React from 'react';
import './footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faFacebook,faInstagram,faGithub,faTwitter,faLinkedin,faPhone} from '@fortawesome/free-brands-svg-icons'
import {faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='footer'>
            
            {/* <div className='div'>
                <h5> Connect Us :</h5>
                
            </div> */}
            <div className="div1">
            <a href="/" className="faceBook">  <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            {/* <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faInstagram} size="2x"/></a> */}
            <a href="https://github.com/Scripters-401" className="faceBook">  <FontAwesomeIcon icon={faGithub} size="2x"/></a>
            {/* <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faTwitter} size="2x"/></a> */}
            <a href="/" className="faceBook">  <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            

            </div>
            
            <p className="right" >&copy; 2020 Scripters Group</p>
        </footer>
    )
};

export default Footer;