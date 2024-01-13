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
            {(logoClicked || pageWidth > 1000) ? ( <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/schedule">Schedule</a>
                </li>
                <li>
                    <a href="/roster">Roster</a>
                </li>
                <li>
                    <a href="/rules">Rules</a>
                </li>
                <li>
                    <a href="/directions">Directions</a>
                </li>
                <li>
                    <a href="/merch">Merch</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/donate">Donate</a>
                </li>
                <li>
                    <a href="/reunion">Reunion</a>
                </li>
                {pageWidth < 1000 && <li>
                    <p onClick={handleLogoClick}>Close <span id="x">x</span></p>
                </li>}
            </ul>) : (<p id="menuButton" onClick={handleLogoClick}>Menu</p>)}
        </header>
    )
}


export default Navbar;
