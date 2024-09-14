import React from 'react';

function Header() {
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

                <div className="extra-info">
                    <h3>Anti Ragging</h3>
                    <p>Information as required by MARB of NMC</p>
                </div>
            </div>


         <header className="header">

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Education</a></li>
                    <li><a href="#contact">Facilities</a></li>
                    <li><a href="#contact">Departments</a></li>
                    <li><a href="#contact">Academics</a></li>
                    <li><a href="#contact">Alumni</a></li>
                    <li><a href="#contact">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact">Information as required by MARB of NMC</a></li>
                    <li><a href="#contact"> Career/Jobs and opportunities </a></li>

                </ul>
            </nav>
        </header>

        </>
    );
}

export default Header;
