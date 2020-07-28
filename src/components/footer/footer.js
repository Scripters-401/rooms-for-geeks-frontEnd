import React from 'react';
import './footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='footer'>
           
            <div className="div1 hover">
            <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faInstagram} size="2x"/></a>
            <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a herf="#" className="faceBook">  <FontAwesomeIcon icon={faTwitter} size="2x"/></a>
            </div>
            
            <p >&copy; 2020 Scripters Group</p>
        </footer>
    )
};

export default Footer;