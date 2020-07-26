import React from 'react';
import './about-us.scss';

const AboutAs = () => {
    // const currentDate = new Date();
    // let theSec = currentDate.getSeconds();
    // let theMin = currentDate.getMinutes();
    // let theHour = currentDate.getHours();

    return (
        <>
            <div className='aboutUsDiv'>

            </div>
            <h3 className='ourTeamHeader'> Meet Our Team </h3>

            <div className="slideshow-container">

                <div className="mySlides" >
                    <blockquote className='blockquote'></blockquote><q> When I first joined the company in 2000, I thought it will be a good turn that will help my career growth for another 5 years or so.  Well, I guess I was wrong. Around 19 years have passed now and I am still here, and I still believe there is room for growth and new challenges along the way. I have changed multiple career paths and held diverse, yet growing responsibilities. But one thing stayed the same, my pride in being part of the company and appreciation towards my second family, STS PayOne Team” </q>

                    <div className="row empRow">

                        <img className='profileMemberPhoto' src="https://ca.slack-edge.com/TNGRRLUMA-UT41V58FK-1d22cbe8ff94-512" /> 

                        <p className="author"> ruwaid Al sayyed obeid </p>

                    </div>

                </div>
                <a className="prev">❮</a>
                <a className="next" >❮</a>
            </div>

        </>
    )
};

export default AboutAs;