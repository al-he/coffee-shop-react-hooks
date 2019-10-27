import React from 'react';
import Banner from '../banner';
import Footer from '../footer';

const NotFound = () => {
    return (
        <>
            <Banner />
            <div className="not-found_wrap">
                <h1>Oooops! Page not Found</h1>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
