import React from 'react';
import PageListItem from '../page-list-item/';
import Spinner from '../../UI/spinner';
import Error from '../../UI/error';

const PageList = props => {
    const { coffee, loading, error } = props;

    const spinner = loading ? <Spinner /> : null;
    const er = error ? <Error /> : null;
    const data = coffee.map(item => {
        return <PageListItem key={item.price} {...item} />;
    });
    const hasData = !(loading || error) ? data : null;
    return (
        <div className="shop__wrapper">
            {spinner}
            {er}
            {hasData}
        </div>
    );
};

export default PageList;
