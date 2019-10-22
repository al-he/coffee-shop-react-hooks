import React from 'react';
import BestWrapper from './best-list';
const Best = () => {
    return (
        <section className="best">
            <div className="container">
                <div className="title">Our best</div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <BestWrapper />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Best;
