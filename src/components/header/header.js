import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <header>
            <ul className="header">
                <li className="header__item">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </li>
                <li className="header__item">
                    <a href="/">Our coffee</a>
                </li>
                <li className="header__item">
                    <a href="/">For your pleasure</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
