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


                    <div class="contentHome">
                        <div class="contentHome__container">
                            <p class="contentHome__container__text">
                                Hello
                            </p>

                            <ul class="contentHome__container__list">
                                <li class="contentHome__container__list__item">Geek !</li>
                                <li class="contentHome__container__list__item">Geeks !</li>
                                <li class="contentHome__container__list__item">users !</li>
                                <li class="contentHome__container__list__item">everybody !</li>
                            </ul>
                        </div>
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