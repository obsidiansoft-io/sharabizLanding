import React from 'react';



import Phone from '../../../img/phone.png';
const WhoIsIt = () => {
    return (
        <div className="elementWhoIt">

            <div className="contInfo">

                <div>
                    <h3>You are an individual and want to spread the word about…</h3>
                    <p>
                        A simple and effective way to share something (video or image or text) about you, your business or a specific product or service.
</p>
                    <p>
                        From the convenience of your phone, you create your own <span>“bizcards”</span>
(presentation page), from predefined templates that you share with your contacts or friends.

</p>
      
                </div>


                <div>
                    <img src={Phone} alt="to Who"/>


                </div>
            </div>
        </div >
    );
}

export default WhoIsIt;