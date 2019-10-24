import React from 'react';
import { withRouter } from 'react-router-dom';

const BestListItem = props => {
    return (
        <div
            className="best__item"
            onClick={() => {
                props.history.push(
                    `/coffee/${props.name.toLowerCase().replace(/ /g, '-')}`
                );
            }}>
            <img src={props.url} alt={props.name} />
            <div className="best__item-title">{props.name}</div>
            <div className="best__item-price">{props.price}</div>
        </div>
    );
};

export default withRouter(BestListItem);
