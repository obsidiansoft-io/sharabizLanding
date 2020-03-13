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
                <div>

                </div>
                <div>
                    <form onSubmot={onSubmit}>
                    <div>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="Tu email"
                                value={name}
                                onChange={onChange}
                            />

                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={onChange}
                            />

                        </div>
                        <div>
                            <label htmlFor="email">Phone number</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                placeholder="Tu email"
                                value={phone}
                                onChange={onChange}
                            />

                        </div>
                        <div className="campo-form">
                        <input type="submit"  value="Contactar" />
                    </div>
                    </form>
                </div>
            </div>

        </div >
    );
}

export default Contact;