import React from 'react'
import "./Css/Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#">Logo</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Playlist</a></li>
                <li><a href="#">Songs</a></li>
                <li><a href="#">Coming Soon</a></li>
            </ul>
            <div className="navbar-button">
                <a href="#" className="btn">Get Started</a>
            </div>
            <div className="navbar-toggle">
                <span className="toggle-icon">&#9776;</span>
            </div>
            
        </nav>
    )
}

export default Navbar
