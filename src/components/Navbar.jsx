// Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css';
import logo from './images/logo.png';


const Navbar = () => {
    const navigate = useNavigate();
    const [pageWidth, ] = useState(window.innerWidth);
    const [logoClicked, setLogoClicked] = useState(false);

    const handleLogoClick = () => {
        if (pageWidth > 1000) {
            navigate('/')
        } else {
            setLogoClicked(!logoClicked);

        }
        
    };


    return (
        <header>

            <img src={logo} onClick={handleLogoClick} alt="WRFC Logo" />
            {(logoClicked || pageWidth > 1000) ? ( <ul className='nav-ul'>
                <li className="nav-li">
                    <a href="/">Home</a>
                </li>
                <li className="nav-li">
                    <a href="/about">About</a>
                </li>
                <li className="nav-li">
                    <a href="/schedule">Schedule</a>
                </li>
                <li className="nav-li">
                    <a href="/roster">Roster</a>
                </li>
                <li className="nav-li">
                    <a href="/rules">Rules</a>
                </li>
                <li className="nav-li">
                    <a href="/directions">Directions</a>
                </li>
                <li className="nav-li">
                    <a href="/merch">Merch</a>
                </li>
                <li className="nav-li">
                    <a href="/contact">Contact</a>
                </li>
                <li className="nav-li">
                    <a href="/donate">Donate</a>
                </li>
                <li className="nav-li">
                    <a href="/reunion">Reunion</a>
                </li>
                {pageWidth < 1000 && <li className="nav-li">
                    <p onClick={handleLogoClick}>Close <span id="x">x</span></p>
                </li>}
            </ul>) : (<p id="menuButton" onClick={handleLogoClick}>Menu</p>)}
        </header>
    )
}


export default Navbar;
