import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
                <nav className='nav-container'>
                    <ul className="main-nav"> 
                        <Logo />
                        <li onClick={() => onRouteChange('signout')} className='nav-bt'>Sign Out</li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className='nav-container'>
                    <ul className="main-nav"> 
                        <Logo />
                        <li onClick={() => onRouteChange('signin')} className='nav-bt'>Sign In</li>
                        <li onClick={() => onRouteChange('register')} className='nav-bt'>Register</li>
                    </ul>
                    
                </nav>
            );
            
        }
       
}

export default Navigation;

