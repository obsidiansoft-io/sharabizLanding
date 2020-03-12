import React from 'react';

import Navbar from '../layout/Navbar';
///fragments+
import Slider from './homeFragments/Slider';
import WhoIsIt from './homeFragments/WhoIsIt';
import HowItWorks from './homeFragments/HowItWorks';
const Home = () => {
    return (
        <div>
            <Navbar/>
        <div className="sliderBox">
        <Slider/>
        </div>
           <WhoIsIt/>
           <HowItWorks/>
        </div>
    );
}

export default Home;