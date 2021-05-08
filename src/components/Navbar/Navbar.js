import React from 'react';
import './Navbar.css';
import icon from '../../assets/yoga-icon512.png';

export default function Navbar() {
    return (
        <header className="Navbar">
            <div className="titleContainer">
                <div className="title">
                    <a href="https://imatomster.github.io/stretch-timer/">
                        <img src={icon} alt="yoga-icon" />
                        Stretch Timer
                    </a>
                </div>
            </div>

            <nav className="navContainer">
                <ul className="navItems">
                    <li><a href="https://imatomster.github.io/stretch-timer/">Reset</a></li>
                    <li><a href="https://github.com/imatomster/stretch-timer">Github</a></li>
                    <li><a href="https://github.com/imatomster">Tommy Hang 2021</a></li>
                </ul>
            </nav>
        </header>
    )
}
