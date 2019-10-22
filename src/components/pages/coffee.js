import React, { useContext, useEffect } from 'react';
import Banner from '../banner';
import PageContent from '../page-content';
import Footer from '../footer';
import PageList from './page-list';
import { CoffeeContext } from '../../context/coffee/coffeeContext';

import girl from '../../assets/images/coffee_girl.jpg';
import girl2 from '../../assets/images/goods-girl.png';

const Coffee = props => {
    const { coffee, loading, error, getCoffee } = useContext(CoffeeContext);
    useEffect(() => {
        getCoffee(props.match.params.name);
        // eslint-disable-next-line
    }, []);
    const img = props.match.params.name === 'coffee' ? girl : girl2;
    const title =
        props.match.params.name === 'coffee'
            ? 'Our Coffee'
            : 'For your pleasure';
    return (
        <>
            <Banner title={title} />
            <section className="shop">
                <div className="container">
                    <PageContent img={img} />
                    <div className="line"></div>
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label
                                    className="shop__search-label"
                                    htmlFor="filter">
                                    Looking for
                                </label>
                                <input
                                    id="filter"
                                    type="text"
                                    placeholder="start typing here..."
                                    className="shop__search-input"
                                />
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button className="shop__filter-btn">
                                        Brazil
                                    </button>
                                    <button className="shop__filter-btn">
                                        Kenya
                                    </button>
                                    <button className="shop__filter-btn">
                                        Columbia
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <PageList
                                coffee={coffee}
                                loading={loading}
                                error={error}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export { Coffee };
