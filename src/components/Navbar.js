//extension es7
//type rfce - tab

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

     //nav . navbar - enter: creates a class navbar
    //for the L+Sign in bug when resreshing page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                TRAVEL <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} /> 
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                   <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                   </Link>
                </li>
                <li>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                    </Link>
                </li>
                <li>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                    </Link>
                </li>
                <li>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
