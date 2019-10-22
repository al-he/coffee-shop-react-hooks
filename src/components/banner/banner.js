import React from 'react';
import Header from '../header';

const Banner = props => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Header />
                    </div>
                </div>
                <h1 className="title-big">{props.title}</h1>
            </div>
        </div>
    );
};

export default Banner;
