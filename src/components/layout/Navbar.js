import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../img/shra.svg';

const Navbar = () => {
    return (

     <header>
                <div className="nav">
                <img src={Logo} alt="sharabiz" />
                <div className="label">
                    <p>Share it your way</p>
                </div>
                <div className="divToLogin">
                    <Link>
                 
                        Login In
                    
                    </Link>
                </div>
            </div>
            <div className="navMenu">
                <ul>

                    <li>
                    <Link to={'/'}>
                    Home
                    
                    </Link>
                    </li>
                    <li>
                         <Link to={'/api-integration'}>
                         API Integration
                    
                    </Link>
                    </li>
                    <li>
                    
                    <Link to={'/pricing'}>
                    Pricing
                    </Link>
                    </li>
                    <li>
                           
                    <Link to={'/contact'}>
                    Contact US
                    </Link>
                   
                    </li>
                </ul>
            </div>
     </header>

    );
}

export default Navbar;
