import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../img/shra.svg';

const Navbar = () => {
    return (

            <nav>
                <img src={Logo} alt="sharabiz" />
                <div className="label">
                    <p>Share it your way</p>
                </div>
                <div>
                    <Link>
                 
                        Login In
                    
                    </Link>
                </div>
            </nav>

    );
}

export default Navbar;
