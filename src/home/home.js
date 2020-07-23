import React, { useState } from 'react';
import img from '../assest/Clock.jpg';
import timer1 from '../assest/a8rab2M.png';
import timer2 from '../assest/a8rab2.png';
import man from '../assest/ManAtTheMiddle.png';
import './home.scss';

const Home = () => {
    let [clock, setClock] = useState(1);


    const secClock = () => {
        if (clock !== 12) {
            setClock(clock + 1);
        } else {
            setClock(1);
        }
    }


    // setInterval(secClock, 5000)

    // const hourHand = document.getElementById('hour');
    // const minuteHand = document.getElementById('minute')
    // const secondHand = document.getElementsByClassName('secend')
    // let docE = document.images;

    // let img0 = docE.item(0);
    // // let img1 = docE[1];     

    // function setClock() {
    //     // console.log('hourHand:::', hourHand);
    //     console.log('minuteHand:::', minuteHand);
    //     console.log('docE:::', docE);
    //     console.log('img0::', img0);
    //     // console.log('img1:::', img1);
    //     const currentDate = new Date()
    //     const secondsRatio = currentDate.getSeconds() / 60
    //     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    //     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    //     setRotation(secondHand, secondsRatio)
    //     setRotation(minuteHand, minutesRatio)
    //     setRotation(hourHand, hoursRatio)
    // }

    // function setRotation(element, rotationRatio) {
    //     console.log('element:::', element);

    //     // element.style.setProperty('--rotation', rotationRatio * 360)
    // }

    // setClock()
    return (
        <>

            <div className="box">

                <div>
                    <img className='homeImg' src={img} alt='homeImg' />
                    <div className="number number1">1</div>
                    <div className="number number2">2</div>
                    <div className="number number3">3</div>
                    <div className="number number4">4</div>
                    <div className="number number5">5</div>
                    <div className="number number6">6</div>
                    <div className="number number7">7</div>
                    <div className="number number8">8</div>
                    <div className="number number9">9</div>
                    <div className="number number10">10</div>
                    <div className="number number11">11</div>
                    <div className="number number12">12</div>
                </div>
                <div className="text">
                    <h1 className='title'>Rooms For Geeks</h1>
                </div>
                {/* <div className="hand sec" data-sec-hand> */}
                    <img className={`secend number2`} src={timer2} alt='timer1' />
                {/* </div> */}
            </div>


            <div id="minute">
                <img className='min' src={timer1} alt='timer2' />
            </div>
            {/* <div className="hand hours"> */}
                <img id='hour' src={timer2} alt='timer2' />
            {/* </div> */}

            <img className='man' src={man} alt='man' />

        </>
    )
};

export default Home;