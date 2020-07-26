import React from 'react';

//Clock1.jpg
import img from '../../assest/HomeCover.jpg';
// import timer1 from '../../assest/a8rab2.png';
// import timer2 from '../../assest/a8rab2.png';
// import man from '../../assest/ManAtTheMiddle1.png';
import './home.scss';

const Home = () => {
    // const currentDate = new Date();
    // let theSec = currentDate.getSeconds();
    // let theMin = currentDate.getMinutes();
    // let theHour = currentDate.getHours();

    return (
        <>
            <div className='homeClock'>
                <div className="box">
                    <div>
                        <img className='homeImg' src={img} alt='homeImg' />

                    </div>
                    <div class="typewriter">
                        <h1 className='animateText'>Welcome to Rooms For Geeks Website</h1>
                    </div>

                    {/* <div class="typewriter1">
                        <h1>we hope that you will enjoy your time and</h1>
                    </div> */}

                    {/* <div class="typewriter2">
                        learn new thing whith us !
                    </div> */}

                </div>
                <div className='secendDiv'>
                    {/* <img className={`secend number${theSec}`} src={timer2} alt='timer1' /> */}
                </div>
                <div className='minDiV'>
                    {/* <img className={`min number${theMin}`} src={timer1} alt='timer2' /> */}
                </div>
                <div className='hourDiv'>
                    {/* <img className={`hour numberH${theHour}`} src={timer2} alt='timer2' /> */}
                </div>
                {/* <img className='man' src={man} alt='man' /> */}
            </div>

        </>
    )
};

export default Home;