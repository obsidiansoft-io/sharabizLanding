import React from 'react';
import { Icon } from 'react-icons-kit';
import { email } from 'react-icons-kit/ionicons/email'

import Navbar from '../layout/Navbar';

import imgBanner from '../../img/down.png';



const Pricing = () => {

    const basicPricing = [
        { id: 1, title: 'Basic', contacts: '1,000' },
        { id: 2, title: 'Starter', contacts: '1,000' },
        { id: 3, title: 'Professional', contacts: '10,000' }
    ];

    const premiumPricing = [
        { id: 1, title: 'Enterprise', contacts: '50,000' },

    ];



    return (
        <div>
            <Navbar />

            <div className="priceShow">
                <section>
                    <div className="tableBox">
                        {
                            basicPricing.map(item => (
                                <div className="princesTable" key={item.id}>
                                    <div className="forTitle">
                                        <h3>{item.title}</h3>
                                    </div>
                                    {/*  */}
                                    <div className="noForNow">
                                        <div>
                                            <p className="label">
                                                please come back soon <br /> for more details
                                        </p>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            ))
                        }
                    </div>
                </section>
                <div className="bannerNeed">
                    <div className="izQ">
                        <div>
                            <div className="title">
                                <h3>
                                    Do You need more?
                    </h3>
                            </div>
                            <p>
                                If our basic packages are not enough for you or your business, we can certainly find the best solution for you and your needs.
                    </p>
                        </div>
                    </div>
                    <div className="deR">
                        <img src={imgBanner} alt="iphone prices" />
                    </div>
                    {/*  */}
                </div>
                <section className="premiumBlock">
                    <div className="tableBox">
                        {
                            premiumPricing.map(item => (
                                <div className="princesTablePremium" key={item.id}>
                                    <div className="forTitle">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>


                <div className="politics">

                    <div className="callUs">
                        <h4>
                            Not sure which plan is right for you?
                    </h4>

                        <h5>Give us a hi.</h5>
                        <div className="sendmail">
                            <a href="mailto:info@sharabiz.com" >
                                <Icon icon={email} size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="textP">
                        <p>
                            All our packages respect the privacy conditions of both the contracting party and the registered users.
    </p>
                        <p>
                            Customized systems or means, you need a pre-appointment to clarify doubts and scope. the necessary configurations will have an implementation time of 3 working days up to 6 months. depending on the needs for each client. If there are changes during this process by the client, the delivery time will be restarted. It is necessary to make a payment of one month of prior service to begin development. this type of development has an obligatory contract of use of at least 16 months
    </p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Pricing;