import React from "react";
import './style.css';
import logo from './logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img alt="REACT Logo" src={logo} width="100px" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header