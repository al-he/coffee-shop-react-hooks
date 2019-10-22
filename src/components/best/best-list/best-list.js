import React, { useContext, useEffect } from 'react';
import BestListItem from '../best-list-item';
import { BestContext } from '../../../context/best/bestContext';
import Spinner from '../../UI/spinner';
import Error from '../../UI/error';

const BestWrapper = () => {
    const { bestsellers, loading, error, getBest } = useContext(BestContext);
    useEffect(() => {
        getBest();
        // eslint-disable-next-line
    }, []);

    const spinner = loading ? <Spinner /> : null;
    const er = error ? <Error /> : null;
    const data = bestsellers.map(item => {
        return <BestListItem key={item.price} {...item} />;
    });
    const hasData = !(loading || error) ? data : null;

    return (
        <div className="best__wrapper">
            {spinner}
            {er}
            {hasData}
        </div>
    );
};

export default BestWrapper;
