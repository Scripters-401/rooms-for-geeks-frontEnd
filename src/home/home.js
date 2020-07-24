import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../assest/Clock.jpg';
import timer1 from '../assest/a8rab2M.png';
import timer2 from '../assest/a8rab2.png';
import man from '../assest/ManAtTheMiddle.png';
import './home.scss';

const Home = () => {
    // setInterval(setClock, 1000);
    // let hour = document.querySelector('hour');
    // let min = document.querySelector('min');
    // let secend = document.querySelector('secend');
    // function setClock() {
    //     // console.log('hiiiiiiiiiiii');
    //  const currentDate =new Date();
    //  const secendRotate = currentDate.getSeconds()/60; 
    //  const hourRotate = currentDate.getHours()/12; 
    //  const minRotate = currentDate.getMinutes()/60;
    //  setRotation(secendRotate,secend);
    //  setRotation(hourRotate,hour);
    //  setRotation(minRotate,min);
    // }
    // function setRotation(element,rotationRatio){
    //     console.log('jjjj',rotationRatio);
    //     element.style.setProperty('--rotation',rotationRatio*360);
    // }
    // setClock();
    return (
        <>
              <NavLink to="/sign">signnnnnn</NavLink>
            <div className="box">

                <div>
                    <img className='homeImg' src={img} alt='homeImg' />
                </div>
                <div className="text">
                    <h1 className='title'>Rooms For Geeks</h1>
                </div>
                <img className='secend' src={timer2} alt='timer1' />
            </div>
            <img className='min' src={timer1} alt='timer2' />
            <img className='hour' src={timer2} alt='timer2' />
            <img className='man' src={man} alt='man' />

        
        </>
    )
};

export default Home;