import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import react-icons

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className="logo-container">
                <div className="left-section">
                    <div className="logo">
                        <img src="logo/main_logo.png" alt="Logo" />
                    </div>
                    <div className="college-info">
                        <h1>Bhaskar Medical College <br />& Bhaskar General Hospital</h1>
                    </div>
                </div>

                {/* This extra-info will be hidden in desktop view */}
                <div className="extra-info">
                    <h3>Anti Ragging</h3>
                    <p>Information as required by MARB of NMC</p>
                </div>
            </div>

            <header className="nav-links">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Education</a></li>
                        <li><a href="#contact">Facilities</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#alumni">Alumni</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#marb">Information as required by MARB of NMC</a></li>
                        <li><a href="#careers">Career/Jobs and opportunities</a></li>
                    </ul>
                    {/* Include extra-info in the dropdown menu for mobile view */}
                    <div className="extra-info">
                        <h3>Anti Ragging</h3>
                        <p>Information as required by MARB of NMC</p>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
