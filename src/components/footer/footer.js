import React from 'react';
import black from '../../assets/images/logo_black.svg';
import dark from '../../assets/images/beans_logo_dark.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <a href="/">
                                    <img src={black} alt="logo" />
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="/">Our coffee</a>
                            </li>
                            <li className="footer__item">
                                <a href="/">For your pleasure</a>
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
