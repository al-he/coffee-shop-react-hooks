import React from 'react';
import Footer from '../footer';
import Banner from '../banner/';

const Card = props => {
    console.log(props);
    return (
        <>
            <Banner title={'lol'} />
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img
                                className="shop__girl"
                                src="img/coffee_item.jpg"
                                alt="coffee_item"
                            />
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <img
                                className="beanslogo"
                                src="logo/Beans_logo_dark.svg"
                                alt="Beans logo"
                            />
                            <div className="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">
                                    16.99$
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Card;
