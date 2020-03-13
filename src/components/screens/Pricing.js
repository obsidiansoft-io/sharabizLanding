import React from 'react';

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
        { id: 2, title: 'Custom development', contacts: 'All you need' },
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
                        <img src={imgBanner} />
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
            </div>
        </div>
    );
}

export default Pricing;