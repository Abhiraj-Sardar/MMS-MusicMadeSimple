import React from 'react'
import "./Css/Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button className="link-button">Logo</button>
            </div>
            <ul className="navbar-menu">
                <li><button className="link-button">Home</button></li>
                <li><button className="link-button">Playlist</button></li>
                <li><button className="link-button">Songs</button></li>
                <li><button className="link-button">Coming Soon</button></li>
            </ul>
            <div className="navbar-button">
                <button className="btn">Get Started</button>
            </div>
            <div className="navbar-toggle">
                <span className="toggle-icon">&#9776;</span>
            </div>
            
        </nav>
    )
}

export default Navbar
