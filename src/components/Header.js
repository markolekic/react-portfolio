import React from 'react'

const Header = () => {
    return (
        <div id="home" className="container-fluid">
            <nav className="container">
                <div className="logo-wrapper">
                    <a href="#home"><img className="logo-img" src="./images/logo.png" alt="my-logo" /></a>
                </div>
                <div className="link-wrapper">
                    <ul className="link-list">
                        <li className="link-item"><a href="#about-me">About Me</a></li>
                        <li className="link-item"><a href="#projects">Projects</a></li>
                        <li className="link-item"><a href="#contact-me">Contact Me</a></li>
                    </ul>
                </div>
                <button class="navbar-toggler">
                    <span></span>
                </button>
            </nav>
        </div>
    )
}

export default Header
