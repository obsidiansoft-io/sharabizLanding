import React from 'react';

import Navbar from '../layout/Navbar';
///fragments+
import WhoIsIt from './homeFragments/WhoIsIt';
import HowItWorks from './homeFragments/HowItWorks';
const Home = () => {
    return (
        <div>
            <Navbar/>
           
           <WhoIsIt/>
           <HowItWorks/>
        </div>
    );
}

export default Home;