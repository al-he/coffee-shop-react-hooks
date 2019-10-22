import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-wrap">
            <div className="lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default Spinner;
