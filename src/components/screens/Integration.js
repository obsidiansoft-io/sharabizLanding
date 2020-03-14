import React from 'react';

import Navbar from '../layout/Navbar';

import video from '../../video/video.webm';

import Logo from '../../img/shra.svg';


const Integration = () => {
    return (
        <div>
            <Navbar />
            <div className="NextTo">



                <video
                    autoPlay
                    muted
                    loop
                    style={{

                        width: "100%",
                        left: 0,
                        top: 0
                    }}
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="shadow">
                    <div className="msg">
                        <div> <img src={Logo} alt="logo" /></div>
                        <h1>
                            coming soon
    </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Integration;