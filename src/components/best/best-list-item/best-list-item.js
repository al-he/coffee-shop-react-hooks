import React from 'react';

const BestListItem = props => {
    return (
        <div className="best__item">
            <img src={props.url} alt={props.name} />
            <div className="best__item-title">{props.name}</div>
            <div className="best__item-price">{props.price}</div>
        </div>
    );
};

export default BestListItem;
