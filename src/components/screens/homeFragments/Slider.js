import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import SliderA from '../../../img/bgWM.jpg';
import SliderB from '../../../img/a.jpg';
import SliderC from '../../../img/B.jpg';
import SliderD from '../../../img/C.jpg';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div className="areaLabel" data-src={SliderA} >
                <p>Create your own digital <span>
                bizcards
                </span> in a minute or two and start sharing immediately.
</p>
            </div>
            <div className="areaLabel" data-src={SliderB} >
                <p>Spread the word to your personal contacts or posting onto your social networks.

</p>
            </div>
            <div className="areaLabel" data-src={SliderC} >
                <p> Sell directly from your <br />
                <span>
                bizcards
                </span> 


</p>
            </div>
            <div className="areaLabel" data-src={SliderD} >
                <p> Sell directly from your <span>
                bizcards
                </span>
                Check stats and track how effective your bizcards are.


</p>
            </div>
        </AutoplaySlider>
    );
}

export default Slider;