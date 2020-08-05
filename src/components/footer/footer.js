import React from 'react';
import Swal from 'sweetalert2'
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assest/weblogo2.png';

const Footer = () => {
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
            <div className='termsAndPrivacy'>
            <span className='terms' onClick={(e)=>termsOfService(e)}>Terms Of Service</span>
            <span> | </span>
            <span className='terms' onClick={(e)=>privacyPolicy(e)}>Privacy Policy</span>
            </div>
        </footer>
    )
};

export default Footer;