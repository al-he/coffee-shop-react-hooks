import React from 'react';

const PageListItem = props => {
    return (
        <div className="shop__item">
            <img src={props.url} alt={props.name} />
            <div className="shop__item-title">{props.name}</div>
            <div className="shop__item-country">{props.country}</div>
            <div className="shop__item-price">{props.price}</div>
        </div>
    );
};

export default PageListItem;
