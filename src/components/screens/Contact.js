import React, { useState } from 'react';

import Navbar from '../layout/Navbar';

const Contact = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''

    });
    const { name, email, phone } = contact;
    const onChange = (e) => {
        setContact({
            //crea una copia
            ...contact,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        //Validar campos

        //Pasar Action a reducer
    }

    return (
        <div>
            <Navbar />
            <div className="areaContact">
                <div className="areaImages">

                </div>
                <div className="areaForm">
                    <div>
                        <h3>Let’s talk</h3>
                        <h4>Tell us everything</h4>
                        <p>
                            We are happy to hear you and know how we can improve,
                            tell us how we communicate with you.
                    </p>
                    </div>
                    <div>
                        <form onSubmot={onSubmit}>
                            <div className="elemtForm">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    placeholder="···"
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="elemtForm">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="···"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="elemtForm">
                                <label htmlFor="email">Phone number</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    placeholder="···"
                                    value={phone}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="campo-form">
                                <input type="submit" value="Contactar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Contact;