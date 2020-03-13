import React from 'react';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
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


           <Footer/>
        </div>
    );
}

export default Home;