import React, { useState,useEffect } from 'react'
import "./Css/Navbar.css";
import Logo from "../../Assets/img/favicon/favicon-32x32.png"
import Switch from '@mui/material/Switch';
import DarkBtn from './DarkBtn';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem("darkmode") === 'true';
    });
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        if (darkmode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem("darkmode", darkmode);

    }, [darkmode])


    const handleDarkmode = () => {
        setDarkmode(!darkmode);
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button className="link-button"><img src={Logo} /></button>
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><button className="link-button">&lt; Home /&gt;</button></li>
                <li><button className="link-button">&lt; Playlist /&gt;</button></li>
                <li><button className="link-button">&lt; Songs /&gt;</button></li>
                <li><button className="link-button">&lt; Coming Soon /&gt;</button></li>
            </ul>
            <div className="navbar-button">
                <div className='darkmode'>
                    {/* <Switch checked={darkmode} onChange={handleDarkmode} /> */}
                    <DarkBtn
                    darkmode={darkmode}
                    handleDarkmode={handleDarkmode}
                    />
                    {/* <span >Dark Mode</span> */}
                </div>
                {/* <button className="btn">Get Started</button> */}
            </div>
            <div className="navbar-toggle" onClick={handleToggle}>
                <span className="toggle-icon">{isMenuOpen ? '\u00D7' : '\u2630'}</span>
            </div>

        </nav>
    )
}

export default Navbar
