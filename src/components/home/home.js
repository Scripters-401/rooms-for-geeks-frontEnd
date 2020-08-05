import React from 'react';

import img from '../../assest/HomeCover.jpg';
import './home.scss';

const Home = () => {

    return (
        <>
            <div className='homeClock'>
                <div className="box">
                    <div>
                        <img className='homeImg' src={img} alt='homeImg' />

                    </div>
                    <div className="typewriter">
                        {/* <h1 className='animateText'>Welcome to Rooms For Geeks Website</h1> */}
                    </div>


                    <div className="contentHome">
                        <div className="contentHome__container">
                            <p className="contentHome__container__text">
                                Hello
                            </p>

                            <ul className="contentHome__container__list">
                                <li className="contentHome__container__list__item">Geek !</li>
                                <li className="contentHome__container__list__item">Geeks !</li>
                                <li className="contentHome__container__list__item">users !</li>
                                <li className="contentHome__container__list__item">everybody !</li>
                            </ul>
                        </div>

                        {/* <div class='textAnim'>
                            <div class="container">
                                <h1>Welcome to Rooms For Geeks!</h1>
                                <span class="text1">Here you will find everything you want</span>
                                <span class="text2">What are you waiting for?!</span>
                                <span class="text3">Join us to learn everything you want to learn</span>
                            </div>
                        </div> */}
                    </div>



                    {/* { <div class="typewriter1">
                        <h1>We hope that you will enjoy your time here!</h1>
                    </div> } */}

                    {/* <div class="typewriter2">
                        Lets learn new thing whith us !
                    </div> */}

                </div>
            </div>

        </>
    )
};

export default Home;