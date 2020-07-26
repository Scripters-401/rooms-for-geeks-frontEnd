import React from 'react';
import './footer.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <SocialIcon className='linkedIn' url="http://linkedin.com/in/jaketrent" bgColor="silver" fgColor="white"  />
            <SocialIcon url="http://facebook.com/in/jaketrent" />
            <SocialIcon url="http://github.com/in/jaketrent" />
            <SocialIcon url="http://email.com/in/jaketrent" />
            <p >&copy; 2020 Scripters Group</p>
        </footer>
    )
};

export default Footer;