import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../img/shra.svg';

const Navbar = () => {
    const [whereIm, setWhereIm] = useState();


    useEffect(() => {
    let im = window.location.pathname;
    setWhereIm(im);

    },[]);
    
    return (

<header>
                <div className="nav" id="navbar">
                <img src={Logo} alt="sharabiz" />
                <div className="label">
                
                </div>
                <div className="divToLogin">
                    <Link>
                 
                        Login In
                    
                    </Link>
                </div>
            </div>
            <div className="navMenu" id="menuMain">
                <ul>

                    <li>
                    <Link to={'/'} className={ whereIm === '/' ? 'amHere' : null}>
                    Home
    
                    </Link>
                    </li>
                    <li>
                         <Link to={'/api-integration'} className={ whereIm === '/api-integration' ? 'amHere' : null}>
                         API Integration
                    
                    </Link>
                    </li>
                    <li>
                    
                    <Link to={'/pricing'} className={ whereIm === '/pricing' ? 'amHere' : null}>
                    Pricing
                    </Link>
                    </li>
                    <li>
                           
                    <Link to={'/contact'} className={ whereIm === '/contact' ? 'amHere' : null}>
                    Contact US
                    </Link>
                   
                    </li>
                </ul>
            </div>
     </header>

    );
}

export default Navbar;
