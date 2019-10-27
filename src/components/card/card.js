import React, { useContext, useEffect } from 'react';
import Footer from '../footer';
import Banner from '../banner/';
import Spinner from '../UI/spinner';
import Error from '../UI/error';
import { CoffeeContext } from '../../context/coffee/coffeeContext';
import img from '../../assets/images/beans_logo_dark.svg';

const Card = props => {
    const page = props.match.url.match(/\/([^|]*)\//)
        ? props.match.url.match(/\/([^|]*)\//)[1]
        : null;
    const { coffee, loading, error, getCoffee } = useContext(CoffeeContext);

    useEffect(() => {
        getCoffee(page);
        // eslint-disable-next-line
    }, []);

    const itemArr = coffee.filter(
        item =>
            item.name.toLowerCase() ===
            props.match.params.name.toLowerCase().replace(/-/g, ' ')
    );

    const item = <CardEntry {...itemArr[0]} />;
    const spinner = loading ? <Spinner /> : null;
    const er = error ? <Error /> : null;
    const hasData = !(loading || error) ? item : null;

    return (
        <>
            <Banner title={itemArr[0] ? itemArr[0].name : 'Our Coffee'} />
            <div className="shop">
                <div className="container">
                    <div className="row">
                        {spinner}
                        {er}
                        {hasData}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const CardEntry = props => {
    const { country, price, url, description } = props;
    return (
        <>
            <div className="col-lg-5 offset-1">
                <div className="card__img">
                    <img className="shop__girl" src={url} alt="coffee_item" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src={img} alt="Beans logo" />
                <div className="shop__point">
                    <span>Country:</span>
                    &nbsp;{country}
                </div>
                <div className="shop__point">
                    <span>Description:</span>
                    &nbsp;{description}
                </div>
                <div className="shop__point">
                    <span>Price:</span>
                    <span className="shop__point-price">&nbsp;{price}</span>
                </div>
            </div>
        </>
    );
};
export default Card;
