import React from 'react';
import Banner from '../../banner';
import Footer from '../../footer';
import { Link } from 'react-router-dom';
import dark from '../../../assets/images/beans_logo_dark.svg';
import croissant from '../../../assets/images/croissant.svg';
import back from '../../../assets/images/back.svg';

const ThankPage = () => {
    return (
        <>
            <Banner title={'Contact us'} bg={'contact-banner'} />
            <div className="container">
                <div className="contacts-header">
                    <h1>Tell us about your tastes</h1>
                    <img className="beanslogo" src={dark} alt="Beans logo" />
                </div>
                <div className="thanks-wrap">
                    <h2>
                        Thank you so much <br /> We contact you as soon as
                        posible
                    </h2>
                    <img src={croissant} alt="croissant" />
                    <Link to="/">
                        Another ? <img src={back} alt="back" />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ThankPage;
