import React from 'react';

import Slider from 'react-animated-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import balqees from '../../assest/WhatsApp Image 2020-04-23 at 02.01.13.jpeg';
import obada from '../../assest/Obada.jpg';
import esraa from '../../assest/IMGG.jpeg';
import 'react-animated-slider/build/horizontal.css';
import './about-us.scss';
const AboutAs = props => {
    return (
        <>
            <h3 className='ourTeamHeader'> Meet Our Team </h3>

            <div className="slideshow-container" id='about-us'>
                <Slider className="slider">
                    <div className="mySlides" >
                        <div className="alldiv">
                            <div className="photoInfo">
                                <img className='profileMemberPhoto' src="https://ca.slack-edge.com/TNGRRLUMA-UT41V58FK-1d22cbe8ff94-512" alt='rowaid' />

                                <div className='contaner'>
                                    <p className='author'> Ruwaid Al sayyed obeid  </p>
                                    <p className='major'>  Software Engineer </p>
                                </div>



                            </div>
                            <div className='parConec'>
                                <q className='teamParagr'>
                                    ” My name is Ruwaid Al Sayyed
                                    i am a software developer and Mechatronics engineer
                                    I was member at robotics and electronics student club also i was organizer and
                                    TA then i became an instructor for robotics courses and for some python workshops
                                    I worked and learning for 12 hour daily for 6 months in software development i learned many things during this time
                                    like fornt end and we used javascript jquery SASS and of course HTML and CSS also we learned backend development using nodejs and SQL and NO SQL...
                                    also i practised data structures problems and of course i worked in teams and i enjoy it alot
                    actually i am passionate to learn new technologies and skills so in my free time i am trying to solve challenges and learn new things ” </q>
                                <div className="div2">
                                    <a href="https://www.facebook.com/rowaid.sayyed" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faFacebook} size="2x" color='#416760' /></a>
                                    <a href="https://github.com/rowaidsayyed" rel="noopener noreferrer" target='_blank' className="faceBook" >  <FontAwesomeIcon icon={faGithub} size="2x" color='#416760' /></a>
                                    <a href="https://www.linkedin.com/in/rowaidsayyed/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#416760' /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mySlides" >
                        <div className="alldiv">
                            <div className="photoInfo">
                                <img className='profileMemberPhoto' src={esraa} alt='rowaid' />
                                <div className='contaner'>
                                    <p className='author'> Esra'a Mamoun  </p>
                                    <p className='major'>  Software Engineer </p>
                                </div>

                            </div>
                            <div className='parConec'>
                                <q className='teamParagr'>


                                    ” My name is Esra'a Mamoun, I am a software developer with a physics background, I always had a passion for problem-solving, which is why I loved programming. When I entered an intensive programming course from Issac for 6 months, it was so full of challenges and difficulties which makes many of my colleagues left it, but for me, as far as the difficulties I faced, it was also fun. There was a project after each level of building an Integrated website within 3-4 days to sharpen what we learned during the level. We used JavaScript, CSS, HTML, JQuery, servers, databases, and an open API, we learned and accomplished a lot in a short time, I loved this stage of my life very much ” </q>
                                <div className="div2">
                                    <a href="https://www.facebook.com/Agatha.Christie.Phoenix/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faFacebook} size="2x" color='#416760' /></a>
                                    <a href="https://github.com/EsraaMamoun" rel="noopener noreferrer" target='_blank' className="faceBook" >  <FontAwesomeIcon icon={faGithub} size="2x" color='#416760' /></a>
                                    <a href="https://www.linkedin.com/in/esraa-mamoun-43b4821a1/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#416760' /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mySlides" >
                        <div className="alldiv">
                            <div className="photoInfo">
                                <img className='profileMemberPhoto' src={obada} alt='rowaid' />
                                <div className='contaner'>
                                    <p className='author'> Obada Hussein  </p>
                                    <p className='major'>  Software Engineer </p>
                                </div>

                            </div>
                            <div className='parConec'>
                                <q className='teamParagr'>


                                    ”My name is Obada Hussein i'm 24 years old .. i graduated from Yarmouk University with a major of computer science .. currently i graduated from ASAC that i took a course in software engineering and right now i'm a full stack web developer Specializes in nodeJS with a material from CodeFellows ,in this course i learned the meaning of time pressure and teamwork before learning the technical stuff . i believe that the perfect work comes from experiences more than knowledge that's why my main goal is to collect experiences as much as possible and moving from levels to higher levels ”  </q>
                                <div className="div2">
                                    <a href="https://www.facebook.com/obada.tumaah" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faFacebook} size="2x" color='#416760' /></a>
                                    <a href="https://github.com/Tumaho" rel="noopener noreferrer" target='_blank' className="faceBook" >  <FontAwesomeIcon icon={faGithub} size="2x" color='#416760' /></a>
                                    <a href="https://www.linkedin.com/in/obada19/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#416760' /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mySlides" >
                        <div className="alldiv">
                            <div className="photoInfo">
                                <img className='profileMemberPhoto' src={balqees} alt='rowaid' />
                                <div className='contaner'>
                                    <p className='author'> Balqees Mohammad  </p>
                                    <p className='major'>  Software Engineer </p>
                                </div>

                            </div>
                            <div className='parConec'>
                                <q className='teamParagr'>


                                    ” My name is Balqees Mohammad I'm a software engineer,
                                    I love the logic of coding since day one I know it, so I decided to go deep in this field
                                    first I study computer engineering and now I'm a full-stack developer
                                    I really love when I get stuck in something because it makes me search more, learn more
                                    and it's growing the way of thinking In my brain which affects every single thing in my life
                                    I love challenges and I always accept it, I have been trained in two company in software and hardware,
                    I dealt with the online process for both working and learning and I have worked in teams and we create really good projects together ”   </q>
                                <div className="div2">
                                    <a href="https://www.facebook.com/balqees.qasem.9" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faFacebook} size="2x" color='#416760' /></a>
                                    <a href="https://github.com/Balqeesqasem" rel="noopener noreferrer" target='_blank' className="faceBook" >  <FontAwesomeIcon icon={faGithub} size="2x" color='#416760' /></a>
                                    <a href="https://www.linkedin.com/in/balqees-qasem-4a8782173/" className="faceBook" rel="noopener noreferrer" target='_blank'>  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#416760' /></a>
                                </div>
                            </div>
                        </div>
                    </div>



                </Slider>
            </div>

        </>
    )
};

export default AboutAs;
