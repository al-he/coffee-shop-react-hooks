import React from 'react';
import Header from '../header';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Header />
                    </div>
                </div>
                <h1 className="title-big">Our Coffee</h1>
            </div>
        </div>
    );
};

export default Banner;
