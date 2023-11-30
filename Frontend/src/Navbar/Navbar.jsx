import React,{useState} from 'react';
// import {Button} from './Button';
import {Link} from 'react-router-dom';

import './Navbar.css';

function Navbar (){
    const [click,setClick]=useState(false);
    const [dropdown,setdropdown]= useState(false);
    const[mobile,setMobile]= useState(false);

    const handleClick= ()=>{setClick(!click);}
    const closeMobileMenu= ()=>{setClick(false)}
    
    const onMouseEnter=()=>{
        window.innerWidth<1000? setdropdown(false):setdropdown(true)
    }
    const onMouseLeave=()=>{
        setdropdown(false)
    }
    const mobileMenu=()=>{setMobile(!mobile);}
    
    return(
        <nav className='navbar'>
            <Link to='/productList' className='navbar-logo'onClick={click &&closeMobileMenu}>
            {/* <i className='storeLogo'/> */}
            <img src='/RentHubLogo.png' alt='Logo'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {/* <i className={click ? 'fas fa-times': 'fas fa-bars' }/> */}
                
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/productList' className='nav-links ' onClick={closeMobileMenu}>
                    <i className='fas fa-home'/>
                    Rent
                    </Link>
                </li>
               
                <li className='nav-item'>
                    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                        <i className='fas fa-tools'/>
                        Log in
                    </Link>
                </li>
                
                {/* <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        <i className='fa fa-user'/>
                        Log in
                    </Link>
                </li> */}
            </ul>
            {/* <Button/> */}
        </nav>
    );
}

export default Navbar;