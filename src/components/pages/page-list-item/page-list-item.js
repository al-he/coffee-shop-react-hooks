import React from 'react';
import { withRouter } from 'react-router-dom';

const PageListItem = props => {
    return (
        <div
            className="shop__item"
            onClick={() =>
                props.history.push(props.name.toLowerCase().replace(/ /g, '-'))
            }>
            <img src={props.url} alt={props.name} />
            <div className="shop__item-title">{props.name}</div>
            <div className="shop__item-country">{props.country}</div>
            <div className="shop__item-price">{props.price}</div>
        </div>
    );
};

export default withRouter(PageListItem);
