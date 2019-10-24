import React from 'react';
import black from '../../assets/images/logo_black.svg';
import dark from '../../assets/images/beans_logo_dark.svg';

import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="footer">
                            <li className="footer__item">
                                <NavLink to="/">
                                    <img src={black} alt="logo" />
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/coffee/">Our coffee</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/goods/">
                                    For your pleasure
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/contacts/">Contact us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={dark} alt="Beans logo" />
            </div>
        </footer>
    );
};

export default Footer;
