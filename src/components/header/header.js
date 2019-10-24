import React from 'react';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul className="header">
                <li className="header__item">
                    <NavLink to="/" exact>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/coffee/">Our coffee</NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/goods/">For your pleasure</NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/contacts/">Contact us</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
